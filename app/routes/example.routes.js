module.exports = app => {
  const exampleController = require("../controllers/example.controller.js");

  let router = require("express").Router();

  // Get examples
  router.get("/", exampleController.getExamples);

  app.use('/api/examples', router);
};
