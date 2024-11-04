const asyncHandler = require('express-async-handler')
const upload = require('../utils/upload')
const Tour = require('../models/Tour')
const { validateFields } = require('../utils/validateFields')

exports.getAllTours = asyncHandler(async (req, res) => {
    const tours = await Tour.find().populate('reviews').lean()
    res.status(200).json({ message: 'Tours Get Successfully', result: tours })
})

exports.getTourDetails = asyncHandler(async (req, res) => {
    const { id } = req.params
    const tour = await Tour.findById(id).populate('reviews').lean()
    res.status(200).json({ message: 'Tours Details Fetch Successfully', result: tour })
})

exports.addTour = asyncHandler(async (req, res) => {
    upload(req, res, async (error) => {
        const { name } = req.body

        const isTourExist = await Tour.findOne({ name })
        if (isTourExist) {
            return res.status(400).json({ message: 'Tour already exist' })
        }

        const { isError, errors } = validateFields(req.body)
        if (isError) {
            return res.status(400).json({ message: errors })
        }

        if (error) {
            console.log(error);
            return res.status(400).json({ message: error.message || "Upload Error" })
        }

        const images = []
        if (req.files) {
            for (const image of req.files) {
                images.push(image.filename)
            }
        }

        const tour = await Tour.create({ ...req.body, images })
        res.status(200).json({ message: 'Tour Add Successfully', result: tour })
    })
})

exports.updateTour = asyncHandler(async (req, res) => {

})

exports.deleteTour = asyncHandler(async (req, res) => {

})