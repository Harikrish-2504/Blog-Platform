import React, { useState } from 'react'
import Header from './components/Header'
import { BlogForm } from './components/BlogForm'
import axios from 'axios'
import Blogentry from './components/Blogentry'
import {toast} from 'react-toastify'
import moment from 'moment'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'


export const PostPage = () => {

  const date = moment().format('MMMM Do YYYY, h:mm:ss a');
  const [blogData , setBlogData] = useState({title:"",image:"",description:""})

  const handleChange = (e)=>{
    const {name , value } = e.target;
    setBlogData({...blogData , [name]:value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      console.log("submiting Blog Data",blogData);
      const response = await axios.post("https://blog-platform-beryl.vercel.app/create",{
        title:blogData.title,
        image:blogData.image,
        description:blogData.description,
        date:date
      })
      toast.success("From submited successfully")
      console.log("BLOG DATA POSTED SUCCESSFUL");
          // Clear the form
      setBlogData({
        title: '',
        description: '',
        image: ''
      });
  
    } catch (error) {
      console.error("THERE WAS AN ERROR IN POSTING DATA",error)
      
    }
  }
  return (
    <>
    <div className="w3-content" style={{ maxWidth: 1400 }}>
      {/* Header */}
<Header/>
      {/* Grid */}
      <div className="w3-row">
    
        <div className="w3-col l5">
       <BlogForm blogData={blogData} handleChange={handleChange} handleSubmit={handleSubmit}/>
       <div className='d-flex justify-content-center'>
       <Link to="/">
      <Button variant="dark" className='outlined' type="button">
        Go To Blog
      </Button>
    </Link>
       </div>
        </div>
        <div className="w3-col l7">
   <Blogentry data={blogData}/>
        </div>

      </div>

    </div>


  </>
  
  )
}
