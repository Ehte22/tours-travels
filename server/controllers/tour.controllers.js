const asyncHandler = require('express-async-handler')
const upload = require('../utils/upload')
const Tour = require('../models/Tour')
const { validateFields } = require('../utils/validateFields')
const cloudinary = require('../utils/uploadConfig')
const path = require('path')

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
            return res.status(400).json({ message: error.message || "Upload Error" })
        }

        const images = []
        if (req.files.length > 0) {
            for (const file of req.files) {

                const { secure_url } = await cloudinary.uploader.upload(file.path)
                images.push(secure_url)
            }
        }

        const tour = await Tour.create({ ...req.body, images })
        res.status(200).json({ message: 'Tour Add Successfully', result: tour })
    })
})

exports.updateTour = asyncHandler(async (req, res) => {
    upload(req, res, async (error) => {
        const { removeImages } = req.body
        const indices = removeImages ? Array.from(removeImages) : []

        if (error) {
            return res.status(400).json({ message: error.message || "Upload Error" })
        }

        const { id } = req.params

        const tour = await Tour.findById(id);
        if (!tour) {
            return res.status(404).json({ message: 'Tour Not Found' });
        }

        if (req.files && req.files.length > 0 || indices && indices.length > 0) {
            for (let i = 0; i < indices.length; i++) {
                const index = parseInt(indices[i], 10)

                if (index >= 0 && index < tour.images.length) {
                    const oldImageUrl = tour.images[index]
                    const publicId = oldImageUrl.split("/").pop().split(".")[0];
                    await cloudinary.uploader.destroy(publicId);
                    tour.images.splice(index, 1)

                    if (req.files && req.files.length > 0) {
                        const { secure_url } = await cloudinary.uploader.upload(req.files[i].path)
                        tour.images[index] = secure_url
                    }
                }
            }

            if (req.files && req.files.length > indices.length) {
                for (let i = indices.length; i < req.files.length; i++) {
                    const { secure_url } = await cloudinary.uploader.upload(req.files[i].path);
                    tour.images.push(secure_url);
                }
            }

            await Tour.findByIdAndUpdate(id, { ...req.body, images: tour.images });
            res.status(200).json({ message: 'Tour Update Successfully' });
        } else {
            await Tour.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Tour Update Successfully' });
        }


    })
})

exports.deleteTour = asyncHandler(async (req, res) => {
    const { id } = req.params
    const tour = await Tour.findById(id)

    if (tour.images.length > 0) {
        for (const image of tour.images) {
            const publicId = image.split('/').pop().split('.')[0];
            await cloudinary.uploader.destroy(publicId);
        }
    }

    await Tour.findByIdAndDelete(id)

    res.status(200).json({ message: 'Tour Delete Successfully' })
})