const TagModel = require("../models/TagModel");

const tagController = {
  getAllTag: async (req, res) => {
    const allTags = await TagModel.find({});
    res.send(allTags);
  },
  createTag: async (req, res) => {
    const body = req.body;
    const newTag = new TagModel(body);
    await newTag.save();
    res.status(200).send(newTag);
  },
  eidtTag: async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    await TagModel.updateOne({ _id: id }, body);
    res.status(200).send(body);
  },
  deleteTag: async (req, res) => {
    const id = req.params.id;
    await TagModel.deleteOne({ _id: id });
    res.status(200).send({ message: "delete Successfully" });
  },
};

module.exports = tagController;
