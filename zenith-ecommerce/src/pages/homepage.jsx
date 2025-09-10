import React, { StrictMode } from 'react';
import SliderTextDescription from '../components/HOMEPAGE/SlidetextDescription';
import Slider from '../components/HOMEPAGE/slider';

const HomePage = () => {
  

  return (
    <StrictMode>
        <Slider/>
        <SliderTextDescription/>
    </StrictMode>
  );
};

export default HomePage;