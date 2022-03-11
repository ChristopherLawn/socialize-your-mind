const { User, Thought } = require('../models');
// const noUserFound = {message: 'No user found with that ID!'}

const userController = {
    // get all users
    getAllUser(req, res) {
        User.find({})
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // get single user by ID
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with that ID!' });
                    return;
                }
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // create new user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    // update user by ID
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with that ID!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete user by ID
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with that ID!' });
                    return;
                }
                return Thought.deleteMany({_id: {$in: dbUserData.thoughts } })
            })
            .then(() => {
                res.json({ message: 'User and associated their associated thoughts have been successfully deleted!'})
            }) 
            .catch(err => res.status(400).json(err));
    },

    // add a new friend to a user's friends list
    addUserFriend({ params }, res) {
        User.findOneAndUpdate({ _id: params.userId }, { $addToSet: { friends: params.friendId  } })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with that ID!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete a friend from a user's friend list
    deleteUserFriend({ params }, res) {
        User.findOneAndUpdate({ _id: params.userId }, { $pull: { friends: params.friendId } }, { new: true } )
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with that ID!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = userController;