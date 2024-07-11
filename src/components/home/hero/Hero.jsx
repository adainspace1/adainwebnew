import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='video-container'>
        <video
autoPlay
  loop
  muted
  playsInline
  className='background-video'
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  }}
>
  <source src='../images/9928.MP4' type='video/mp4' />
  Your browser does not support the video tag.
</video>

          <div className='content'>
            <div className='container'>
              <div className='row'>
                <Heading subtitle='WELCOME TO Adain Technologies' title='' />
                <p> Pioneering the future with cutting-edge AI and innovative tech solutions. Empowering businesses through intelligent automation and seamless integration.</p>
                <div className='button'>
                  <button className='primary-btn' href="./about/AboutCard">
                    GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                  </button>
                  {/* <button> VIEW ADAIN <i className='fa fa-long-arrow-alt-right'></i></button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
}

export default Hero;
