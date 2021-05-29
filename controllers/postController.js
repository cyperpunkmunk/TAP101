const db = require("../models");

module.exports = {
    create: function (req, res) {
        console.log(req.body);
        db.Post
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    reply: function (req, res) {
        console.log("I'm unique");
        db.Reply
            .create(req.body)
            .then(dbModel => {db.Post.findByIdAndUpdate(req.params.id, {$push:{reply: dbModel._id}}).then(reply => res.json(reply))})
            .catch(err => res.status(422).json(err)
        );
    },
    getOne: function (req, res) {
        db.Post
            .findById(req.params.id)
            .populate("reply")
            .then(post => res.json(post))
    }
}