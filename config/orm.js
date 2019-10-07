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
    updateOne: function(table, newVal, condition, cb) {
        var queryString = "UPDATE "+ table +" SET ? WHERE "+ condition;
        console.log(queryString)
        connection.query(queryString, [newVal], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM "+ table +" WHERE "+ condition;
        console.log(queryString)
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;