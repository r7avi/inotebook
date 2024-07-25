// src/pages/HomePage.js
import React from 'react';
import Slider from './Slider';
import MarqueeLogos from './MarqueeLogos';
import OurCourses from './OurCourses';


export default function Home() {
  return (
    <div>

          <Slider/>
          <MarqueeLogos/>
          <OurCourses/>

          <br></br>

    </div>
  );
}
