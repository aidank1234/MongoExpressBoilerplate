const dbConfig = require("../db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.mongoose.set('useCreateIndex', true);
db.url = dbConfig.url;

db.example = require('./example.model.js')(mongoose);

module.exports = db;
