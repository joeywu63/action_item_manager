const express = require('express');
const app = express();
app.use(express.static(__dirname + '/action-item-manager/build'));

const { ObjectID } = require('mongodb');
const { Team } = require('../model/team');
const { User } = require('../model/user');

module.exports = app => {
    app.get('/team', (req, res) => {
        Team.find().then(
            teams => {
                res.send({ teams });
            },
            error => {
                res.status(500).send(error);
            }
        );
    });

    app.get('/team/:id', (req, res) => {
        const { id } = req.params;

        if (!ObjectID.isValid(id)) {
            res.status(404).send();
        }

        Team.findById(id)
            .then(team => {
                if (!team) {
                    res.status(404).send();
                } else {
                    res.send({ team });
                }
            })
            .catch(error => {
                res.status(500).send();
            });
    });

    app.get('/team/size/:id', (req, res) => {
        const { id } = req.params;

        User.find({ teamIDList: { $in: [id] } }).then(
            users => {
                res.status(200).send({ length: users.length });
            },
            error => {
                res.status(500).send(error);
            }
        );
    });

    app.get('/team/users/:id', (req, res) => {
        const { id } = req.params;

        User.find({ teamIDList: { $in: [id] } }).then(
            users => {
                res.status(200).send({ users });
            },
            error => {
                res.status(500).send(error);
            }
        );
    });

    app.post('/team/teamsFromList', (req, res) => {
        const { teamList } = req.body;

        Team.find({ _id: { $in: teamList } }).then(
            teams => {
                res.status(200).send({ teams });
            },
            error => {
                res.status(500).send(error);
            }
        );
    });

    app.patch('/team/setManager/:id', (req, res) => {
        const { id } = req.params;
        const { managerID } = req.body;

        if (!ObjectID.isValid(id)) {
            res.status(404).send();
        }
        if (!ObjectID.isValid(managerID)) {
            res.status(404).send();
        }

        Team.findByIdAndUpdate(id, { managerID })
            .then(team => {
                if (!team) {
                    res.status(404).send();
                } else {
                    // Check if user is on the team
                    User.find({
                        _id: managerID,
                        teamIDList: { $in: [id] }
                    }).then(
                        user => {
                            if (user.length === 0) {
                                // Add team to user
                                User.findByIdAndUpdate(managerID, {
                                    $push: { teamIDList: id }
                                })
                                    .then(user => {
                                        if (!user) {
                                            res.status(404).send();
                                        } else {
                                            res.status(200).send();
                                        }
                                    })
                                    .catch(error => {
                                        res.status(400).send();
                                    });
                            } else {
                                res.status(200).send();
                            }
                        },
                        error => {
                            res.status(500).send(error);
                        }
                    );
                }
            })
            .catch(error => {
                res.status(400).send();
            });
    });

    app.post('/team/create', (req, res) => {
        const { name, managerID } = req.body;

        const team = new Team({ name, managerID });

        team.save().then(
            team => {
                res.send({ team });
            },
            error => {
                res.status(400).send(error);
            }
        );
    });

    app.delete('/team/:id', (req, res) => {
        const { id } = req.params;

        if (!ObjectID.isValid(id)) {
            res.status(404).send();
        }

        Team.findByIdAndRemove(id)
            .then(team => {
                if (!team) {
                    res.status(404).send();
                } else {
                    res.send({ team });
                }
            })
            .catch(error => {
                res.status(500).send();
            });
    });
};
