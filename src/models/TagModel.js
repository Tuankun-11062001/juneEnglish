const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TagModel = new Schema({
  header: {
    word: { type: String },
    ipa: { type: String },
    type: { type: String },
    translate: { type: String },
    example: { type: String },
    translateExample: { type: String },
    level: { type: String },
  },
  example: { type: String },
});

module.exports = mongoose.model("Tag", TagModel);
