const router = require('express').Router()
const tourController = require('../controllers/tour.controllers')

router
    .post('/add-tour', tourController.addTour)
    .get('/get-tours', tourController.getAllTours)
    .get('/tour-details/:id', tourController.getTourDetails)

module.exports = router