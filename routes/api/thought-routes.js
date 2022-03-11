const router = require('express').Router();

// a 'const' object that brings in the functions from the controller files and requires the controllers folder
const {
    createThought,
    getAllThought,
    getThoughtById,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought)
    .post(createThought)

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

router
    .route

module.exports = router;