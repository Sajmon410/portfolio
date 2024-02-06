import React, { useEffect, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

const Snowfall = () => {

    const RandomStyleComponent = () => {
      const [randomWidth, setRandomWidth] = useState(0);
      const [randomHeight, setRandomHeight] = useState(0);
      const [randomColor, setRandomColor] = useState('');
    
      // Funkcija za generisanje nasumičnog broja u određenom opsegu
      const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
    
      useEffect(() => {
        // Generisanje random vrednosti za širinu, visinu i boju prilikom montiranja komponente
        setRandomWidth(getRandomNumber(50, 200)); // Širina između 50px i 200px
        setRandomHeight(getRandomNumber(50, 200)); // Visina između 50px i 200px
        setRandomColor(`rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
      }, []); // Prazan niz znači da će se useEffect izvršiti samo prilikom montiranja komponente
    

  return (
    <div
      style={{
        position: 'fixed',
        top: '${getRandomNumber}',
        left: '${getRandomNumber}',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <animated.div
        style={{
          position: 'absolute',
          background: 'white',
          borderRadius: '50%',
          width: '8px',
          height: '8px',
          transform: React.translateY.interpolate((value) => `translateY(${value}vh)`),
        }}
      />
    </div>
  );
};
}
export default Snowfall;
