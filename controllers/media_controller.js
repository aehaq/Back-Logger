var express = require("express");
var media = require("../models/media.js");

var router = express.Router;

router.get("/", function(req, res) {
    media.selectAll(function(data) {
        res.render("index", {media: data})
    });
});

router.post("/api/media", function(req, res) {
    media.insertOne("media_name", req.body.name, function(result) {
        res.json({ id: result.insertId})
    })
});

router.put("/api/media/:id", function(req, res) {
    media.updateOne({completed: 1}, "id", req.params.id, function(req,res) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router;