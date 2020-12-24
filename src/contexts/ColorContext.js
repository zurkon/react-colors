import React, { createContext, useState } from 'react';

export const ColorContext = createContext();

const ColorContextProvider = (props) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const changeLevel = (level) => {
    setLevel(level);
  }

  const changeFormat = (format) => {
    setFormat(format);
  }

  return (
    <ColorContext.Provider value={{ level, format, changeLevel, changeFormat }}>
      {props.children}
    </ColorContext.Provider>
  )
}

export default ColorContextProvider;