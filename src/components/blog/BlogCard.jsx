import React from "react"
const BlogCard = ({image, text1, text2, text3}) => {
  return (
    <>
      
        <div className='items shadow'>
          <div className='img'>
            <img src={image} alt='image' />
          </div>
          <div className='text'>
            <div className='admin flexSB'>
              <span>
                <i className='fa fa-user'></i>
                <label>{text1}</label>
              </span>
              <span>
                <i className='fa fa-calendar-alt'></i>
                <label>{text2}</label>
              </span>
              <span>
                <i className='fa fa-comments'></i>
                <label>{text3}</label>
              </span>
            </div>
           
          </div>
        </div>
    
    </>
  )
}

export default BlogCard
