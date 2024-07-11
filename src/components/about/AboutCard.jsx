
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import React from 'react';


const AboutCard = () => {
  
  
  return (
    <section className='aboutHome'>
        
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/00.jpg' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='People Technology Posibilities' title='' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div key={val.id} className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        
      </section>
  )
}

export default AboutCard
