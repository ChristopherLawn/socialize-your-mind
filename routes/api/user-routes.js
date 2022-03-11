const router = require('express').Router();

// a 'const' object that brings in the functions from the controller files and requires the controllers folder
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addUserFriend,
    deleteUserFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUser)
    .post(createUser);

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

router
    .route('/:userId/friends/:friendId')
    .put(addUserFriend)
    .delete(deleteUserFriend)

module.exports = router;