import React, { StrictMode } from 'react';
import SliderTextDescription from '../components/SlidetextDescription';
import Slider from '../components/slider';

const HomePage = () => {
  

  return (
    <StrictMode>
        <Slider/>
        <SliderTextDescription/>
    </StrictMode>
  );
};

export default HomePage;