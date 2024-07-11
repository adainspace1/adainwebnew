import React from "react"
import "./footer.css"


const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Adain Technologies: Pioneering the future with cutting-edge AI and innovative tech solutions.
               Empowering businesses through intelligent automation and seamless integration.</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>ADAIN TECHNOLOGIES</h1>
            <span>PEOPLE TECHNOLOGIES & POSIBILITIES</span>
            <p>Adain Technologies: Pioneering the future with cutting-edge AI and innovative tech solutions. 
              Empowering businesses through intelligent automation and seamless integration.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
          <br />
          <br />
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>

              <li>Pricing</li>

              <li>Terms & Conditions</li>

              <li>Privacy</li>
              
              <li>Feedbacks</li>
            </ul>
          </div>
          {/* <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div> */}
          <div className='box last'>
            <h3>Have a Question?</h3>
            <ul>
              <li>
                {/* <i className='fa fa-map'></i>  */}
                No:01 SkyBlue Building, Opposite Beam Clinic, Mararaba, Nigeria
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +234-908-2603-201
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@adain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | Made by AdaIn Ltd
        </p>
      </div>
    </>
  )
}

export default Footer
