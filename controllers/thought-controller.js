const { Thought, User } = require('../models');

const thoughtController = {
    // create a new thought
    createThought({ body }, res) {
        Thought.create(body)
            .then(dbThoughtData => {
                User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: dbThoughtData._id } },
                    { new: true }
                )
                    .then(dbUserData => {
                        if (!dbUserData) {
                            res.status(404).json({ message: 'No user found with that ID!' });
                            return;
                        }
                        res.json(dbUserData);
                    })
                    .catch(err => res.json(err));
            })
            .catch(err => res.status(400).json(err))
    },

    // get all thoughts
    getAllThought(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // get single thought by ID
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.thoughtId })
            .select('-__v')
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with that ID!' });
                    return;
                }
                res.json(dbThoughtData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // update thought by ID
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId }, body, { new: true })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with that ID!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete thought by ID
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with that ID!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err));
    },

    // create a reaction to a thought
    createReaction({ params }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId }, { $addToSet: { reactions: { reactionId: params.reactionId } } })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No user found with that ID!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete a reaction from a thought
    deleteReaction({ params }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId }, { $pull: { reactions: { reactionId: params.reactionId } } }, { new: true })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No user found with that ID!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = thoughtController;