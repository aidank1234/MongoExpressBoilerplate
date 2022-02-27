const db = require("../models");
const Example = db.example;

exports.getExamples = (req, res) => {
  Example.find({})
    .then(examples => {
      res.json({examples: examples});
    })
    .catch(err => {
      res.status(500).send({message: "Error pulling examples"});
    });
};
