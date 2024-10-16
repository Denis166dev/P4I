import React from 'react';
import { Slider } from 'antd';
import './barra.css';
const Barrafiltro = () => (
  <Slider
    range={{
      draggableTrack: true,
    }}
    defaultValue={[20, 50]}
  />
);
export default Barrafiltro;