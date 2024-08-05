const  express = require('express')
const { blogData } = require('../controllers/blogController');
const { createBlogData } = require('../controllers/blogController');
const router = express.Router()


router.get("/blog",blogData);
router.post("/create",createBlogData)
module.exports = router;