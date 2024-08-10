const blogModel = require("../models/blogSchema");
//* GETTING ALL BLOG DATA
const getBlogData = async () => {
  try {
    const datas = blogModel.find().sort({createdAt: -1});
    return datas;
  } catch (error) {
    throw new Error("Datas cannot get");
  }
};

//* CREATING BLOG DATA

const createBlogData = async (data) => {
  const {image, title, description, date} = data;

  if (!image || !title || !description) {
    throw new Error("All Fields are required");
  }
  return await blogModel.create({
    image,
    description,
    title,
    date,
  });
};

module.exports = {getBlogData, createBlogData};
