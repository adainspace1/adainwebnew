import React from "react";

import "./contact.css";


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix the default marker icon issue with webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function Contact() {
  const position = [ 9.072264, 7.491302];

  return (
    <>
   
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  Marker at AdaIn Technologies 
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>01 SkyBlue Building, Beside BeamClinic....Mararaba</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>info@adain.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+ 1235 2355 98</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10' placeholder='Create a message here...'></textarea>
              <button className='primary-btn' type='submit'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
   
    </>
  );
}

export default Contact;
