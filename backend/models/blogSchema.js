const mongoose = require("mongoose");
const blogSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "image url is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },

    Comments: {
      type: Number,
      default: 0,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("BlogData", blogSchema);
