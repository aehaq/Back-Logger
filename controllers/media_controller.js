var express = require("express");
var media = require("../models/media.js");

var router = express.Router();

router.get("/", function(req, res) {
    media.selectAll(function(data) {
        res.render("index", {media: data})
    });
});

router.post("/api/media", function(req, res) {
    console.log(req.body)
    media.insertOne("media_name", req.body.media_name, function(result) {
        res.json({ id: result.insertId})
    });
});

router.put("/api/media/update/:id", function(req, res) {
    condition = "id = " + req.params.id
    console.log(condition)
    media.updateOne({completed: 1}, condition, function(result) {
        res.json(result)
    });
});

router.delete("/api/media/delete/:id", function(req, res) {
    condition = `id = ${req.params.id}`
    console.log(condition)
    media.deleteOne(condition, function(result) {
        res.json(result)
    });
});

module.exports = router;