import React from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap';


export const BlogForm = ({blogData,handleChange,handleSubmit}) => {
  return (
    
    <div className="w3-card-4 w3-margin w3-white p-3">

       <div className='row justify-content-center '>
        <div className='col-6 py-4'>
        <h2>CREATE A BLOG</h2>

        </div>
       </div>
       <div className='px-3'>
        <form onSubmit={handleSubmit} className='form' >
          <div className="d-flex flex-column gap-3 px-2">
          <div className='row'>
            <div className="col d-flex flex-column gap-1">
              <label htmlFor="Title" className='h6 '>Title</label>
            <input type="text" className='form-control' name='title' required value={blogData.title} placeholder='Enter title' id='Title' onChange={handleChange} />

            </div>
          </div>
          <div className='row'>
            <div className="col d-flex flex-column gap-1">
              <label htmlFor="image" className='h6'>Image URL</label>
            <input type="text" className='form-control' value={blogData.image} id='image' name='image' placeholder='Enter image URL' required onChange={handleChange} />

            </div>
          </div>
          <div className='row'>
            <div className="col d-flex flex-column gap-1">
              <label htmlFor="description" className='h6'>Description</label>
            <textarea className='form-control' value={blogData.description} id='description' name='description' placeholder='Enter Description' required  onChange={handleChange} />

            </div>
          </div>
          <div className='row'>
            <div className="col d-flex justify-content-center">
            <Button variant="dark" type='submit'>POST</Button>            

            </div>
          </div>
          
         </div>
        </form>
       </div>

        </div>
  )
}
