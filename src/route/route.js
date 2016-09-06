var express = require('express');
var mongoose = require('mongoose');
var Code = require('../models/codeSchema');

var codeRoute = express.Router();

codeRoute.route("/")
    .get(function (req, res) {
        Code.find(function (err, codes) {
            if (err) {
                res.status(500).send(err)
            } else {
                res.send(codes)
            }
        })
    })

.post(function (req, res) {
    var newCode = new Code(req.body);
    newCode.save(function (err, savedCode) {
        if (err) {
            res.status(500).send(err)
        } else {
            res.send(savedCode)
        }
    })
})


codeRoute.route("/:id")
    .get(function (req, res) {
        Code.findOne({
            _id: req.params.id
        }, function (err, singleCode) {
            if (err) {
                res.status(500).send(err)
            } else {
                res.send(singleCode)
            }

        })
    })

.delete(function (req, res) {
    Code.findOneAndRemove({
        _id: req.params.id
    }, function (err, deletedCode) {
        if (err) {
            res.status(500).send(err)
        } else {
            res.send(deletedCode)
        }
    })
})


.put(function (req, res) {
    var values = req.body;
    Code.findOneAndUpdate({
        _id: req.params.id
    }, values, {
        new: true
    }, function (err, updatedCode) {
        if (err) {
            res.status(500).send(err)
        } else {
            res.send(updatedCode)
        }
    });
});


module.exports = codeRoute;
