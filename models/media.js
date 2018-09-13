var orm = require("../config/orm.js");

var media = {
    selectAll: function(cb) {
        orm.selectAll("media", function(res) {
            cb(res);
        });
    },
    insertOne: function(column, value, cb) {
        orm.insertOne("media", column, value, function(res) {
            cb(res);
        });
    },
    updateOne: function(newVal, condition, cb) {
        orm.updateOne("media", newVal, condition, function(res) {
            cb(res);
        });
    }
};


module.exports = media;