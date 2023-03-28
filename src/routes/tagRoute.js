const tagRoute = require("express").Router();
const tagController = require("../controllers/tagController");

tagRoute.get("/", (req, res) => res.send("this is a tag route"));

tagRoute.get("/getAll", tagController.getAllTag);

tagRoute.post("/create", tagController.createTag);

tagRoute.put("/edit/:id", tagController.eidtTag);

tagRoute.delete("/delete/:id", tagController.deleteTag);

module.exports = tagRoute;
