const router = require('express').Router()
const tourController = require('../controllers/tour.controllers')

router
    .post('/add-tour', tourController.addTour)
    .get('/get-tours', tourController.getAllTours)
    .get('/tour-details/:id', tourController.getTourDetails)
    .put('/update-tour/:id', tourController.updateTour)
    .delete('/delete-tour/:id', tourController.deleteTour)

module.exports = router