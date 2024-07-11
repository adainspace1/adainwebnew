import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
     
      <header>
        <img src="./images/Adnet.PNG" alt="" width={40} height={40}/>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Academy</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/team'>Our Team</Link>
            </li>
            
            <li>
              <Link to='/journal'>Product/Service</Link>
            </li>
            <li>
              <Link to='/Public'>News</Link>
            </li>
            
          </ul>
          {/* <div className='start'>
            <div className='button'>EXPLORE NOW <a href="https://www.youtube.com/@Hacked8Academy"></a> </div>
          </div> */}
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
      <Head />
    </>
  )
}

export default Header
