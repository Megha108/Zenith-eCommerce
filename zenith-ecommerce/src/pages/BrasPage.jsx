// src/pages/BrasPage.jsx
import React, { StrictMode } from 'react';

import SliderTextDescription from '../components/SlidetextDescription';
import Slider from '../components/slider';

const BrasPage = () => {


  return (
    <StrictMode>
      <Slider />
      <SliderTextDescription />
    </StrictMode>
  );
};

export default BrasPage;