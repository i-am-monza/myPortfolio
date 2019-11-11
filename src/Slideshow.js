import React from 'react';
import './Slideshow.css';
import { Fade } from 'react-slideshow-image';
import Monza from './images/iammonza.png';
import Landing from './images/main-background.png'; 

const fadeImages = [
  Monza,
  Landing,
  Monza
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
 
export const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="img 1" />
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="img 2" />
          </div>
          <h2>Second Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="img 3" />
          </div>
          <h2>Third Slide</h2>
        </div>
      </Fade>
    </div>
  )
}