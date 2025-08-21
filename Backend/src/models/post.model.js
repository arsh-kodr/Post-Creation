const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    caption: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
    },
    imageId: { type: String, required: true },
  },
  { timestamps: true }
);

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;
