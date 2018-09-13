var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table +";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function(table, column, value, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)"
        
        connection.query(queryString, [table, column, value], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function(table, newVal, column, condition, cb) {
        var queryString = "UPDATE ?? SET ?? WHERE ?? = ?"

        connection.query(queryString, [table, newVal, column, condition], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;