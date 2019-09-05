import React, { useEffect, useState } from 'react';
import {  Dimensions } from 'react-native';

const ScreenDimensions = (_onChange) => {

  
  const [screenData, setScreenData] = useState(Dimensions.get('screen'));
  useEffect(() => {
    const onChange = result => {
      setScreenData(result.screen);
      _onChange && _onChange(result.screen);
    };

    Dimensions.addEventListener('change', onChange);

    return () => Dimensions.removeEventListener('change', onChange);
  });
  return {
    ...screenData,
    isLandscape: screenData.width > screenData.height,
  };
};
export default ScreenDimensions;
