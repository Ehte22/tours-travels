const router = require('express').Router()
const authController = require('../controllers/auth.controllers')

router
    .post('/signup', authController.signUp)
    .post('/signin', authController.signIn)
    .post('/signout', authController.signOut)
    .post('/signin-with-google', authController.singInWithGoogle)
    .post("/verify-email", authController.verifyEmail)
    .post("/verify-otp", authController.verifyOTP)
    .put("/reset-password", authController.resetPassword)

module.exports = router

