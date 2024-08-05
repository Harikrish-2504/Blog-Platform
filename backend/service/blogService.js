const blogModel = require("../models/blogSchema")
//* GETTING ALL BLOG DATA
const getBlogData = async ()=>{
    try {
        const datas = await blogModel.find();
        return datas;
    } catch (error) {
        throw new Error ("Datas cannot get")

    }
}

//* CREATING BLOG DATA

const createBlogData = async (data)=>{
const {image,title,description,date} = data;

if(!image || !title || !description ){
    throw new Error("All Fields are required");
}
return await blogModel.create({
    image,description,title,date
})
}

module.exports={getBlogData,createBlogData}