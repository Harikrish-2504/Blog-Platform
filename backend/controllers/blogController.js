const blogModel = require("../models/blogSchema")
const blogService = require("../service/blogService")
const asyncHandler = require("express-async-handler")

//* Get data for the blog
const blogData = async(req,res)=>{
    try {
        const Datas = await blogService.getBlogData();
        res.status(200).json(Datas)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

//* CREATING BLOG DATAS
const createBlogData = asyncHandler( async (req,res)=>{
    try {
        console.log("dta is",req.body);
        const newData = await blogService.createBlogData(req.body)
        res.status(200).json(newData)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports={blogData,createBlogData}
