const router = require('express').Router();

// a 'const' object that brings in the functions from the controller files and requires the controllers folder
const {
    createThought,
    getAllThought,
    getThoughtById,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought)
    .post(createThought)

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .post(createReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router;