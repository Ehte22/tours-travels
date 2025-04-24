const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const { validateFields } = require('../utils/validateFields')
const { genrateToken } = require('../utils/genrateToken')
const { OAuth2Client } = require('google-auth-library')
const crypto = require('crypto')
const { sendEmail } = require('../utils/email')
const jwt = require('jsonwebtoken')

exports.signUp = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, phone, password, confirmPassword } = req.body

    const { isError, errors } = validateFields(req.body)
    if (isError) {
        return res.status(400).json({ message: errors })
    }

    const user = await User.findOne({ $or: [{ email }, { phone }] })

    if (user) {
        if (user.email === email) {
            return res.status(400).json({ message: 'Email already exist' })
        }
        if (user.phone === phone) {
            return res.status(400).json({ message: 'Phone number already Exist' })
        }
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Confirm Password do not match' })
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({ ...req.body, password: hashPassword })

    res.status(200).json({
        message: 'Sign up successfully', result: {
            _id: newUser._id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            phone: newUser.phone,
            birthDate: newUser.birthDate,
            country: newUser.country,
        }
    })

})

exports.signIn = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    const { isError, errors } = validateFields(req.body)

    if (isError) {
        return res.status(400).json({ message: errors.length > 1 ? 'All fields are required' : errors })
    }

    const user = await User.findOne({
        $or: [
            { email: username },
            { phone: username },
        ]
    })

    if (!user) {
        return res.status(400).json({ message: 'Invalid Credential - Username do not match' })
    }

    const verify = await bcrypt.compare(password, user.password)

    if (!verify) {
        return res.status(400).json({ message: 'Invalid - Credential - Password do not match' })
    }

    const token = genrateToken({ userId: user._id })

    res.cookie(
        "user",
        token,
        { maxAge: 604800000, httpOnly: true, secure: process.env.NOD_ENV === 'production' }
    )

    res.status(200).json({
        message: 'Sign in successfully', result: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            birthDate: user.birthDate,
            country: user.country,
        }
    })

})

exports.signOut = asyncHandler(async (req, res) => {
    res.clearCookie("user")
    return res.status(200).json({ message: 'Sign out successfully' })
})

exports.singInWithGoogle = asyncHandler(async (req, res) => {
    const { credential } = req.body

    const client = new OAuth2Client({ credential: process.env.GOOGLE_CLIENT_ID })

    const verify = await client.verifyIdToken({ idToken: credential })

    if (!verify) {
        return res.status(401).json({ message: 'Unauthorized Access' })
    }

    const { email, given_name, family_name, picture } = verify.payload
    const user = await User.findOne({ email })

    if (user) {
        const token = genrateToken({ userId: user._id })
        res.cookie("user", token, {
            maxAge: 604800000,
            httpOnly: true,
            secure: process.env.NOD_ENV === 'production'
        })
        res.status(200).json({
            message: 'Sign in successfully', result: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                profile: user.profile
            }
        })
    } else {
        const newUser = await User.create({
            firstName: given_name,
            lastName: family_name,
            email,
            profile: picture
        })
        const token = genrateToken({ userId: newUser._id })

        res.cookie("user", token, {
            maxAge: 604800000,
            httpOnly: true,
            secure: process.env.NOD_ENV === 'production'
        })
        res.status(200).json({
            message: 'Sign in successfully', result: {
                _id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                profile: newUser.profile
            }
        })
    }
})

exports.verifyEmail = asyncHandler(async (req, res) => {
    const { email } = req.body

    const { isError } = validateFields(req.body)

    if (isError) {
        return res.status(400).json({ message: 'Please enter your email address' })
    }

    const user = await User.findOne({ email })

    if (!user) {
        return res.status(400).json({ message: 'User not found with given email' })
    }

    const randomNumber = crypto.randomInt(0, 10000)
    const OTP = String(randomNumber).padStart(4, '5')

    const resetToken = genrateToken({ email, otp: OTP })

    await sendEmail({ to: user.email, otp: OTP })

    res.cookie("resetPassToken", resetToken, {
        maxAge: 600000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    })

    res.status(200).json({ message: "OTP send on your Email Address" })
})

exports.verifyOTP = asyncHandler(async (req, res) => {
    console.log(req.body);

    const { otp } = req.body
    console.log(otp, typeof otp);


    const userOtp = req.cookies.resetPassToken
    if (!userOtp) {
        return res.status(400).json({ message: "Token expired" })
    }

    const user = jwt.verify(userOtp, process.env.JWT_KEY)

    console.log(user.otp, typeof user.otp);


    if (user.otp !== otp) {
        return res.status(422).json({ message: "Invalid OTP" })
    }
    res.status(200).json({ message: "Otp verified" })
})

exports.resetPassword = asyncHandler(async (req, res) => {
    const { password, confirmPassword } = req.body

    const { isError, errors } = validateFields({ password, confirmPassword })
    if (isError) {
        return res.status(400).json({ message: errors.length > 1 ? "All fields are required" : errors })
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Confirm Password do not match' })
    }

    const resetToken = req.cookies.resetPassToken
    if (!resetToken) {
        return res.status(400).json({ message: "Token expired" })
    }

    const checkToken = jwt.verify(resetToken, process.env.JWT_KEY)

    const email = checkToken.email
    if (!email) {
        return res.status(422).json({ message: "Email not verified" })
    }


    const user = await User.findOne({ email })

    const hashPassword = await bcrypt.hash(password, 10)
    await User.findByIdAndUpdate(user._id, { password: hashPassword })

    res.clearCookie("resetPassToken")
    res.status(200).json({ message: "Password reset successfully" })
})
