"use client";

import React from 'react';
import { useSpring, animated } from 'react-spring';

const Balloon = ({ x, y }) => {
  const props = useSpring({
    to: { y: y - 100 },
    from: { y: y },
    config: { duration: 2000 },
    reset: true,
    onRest: () => {
      props.y.start();
    },
  });

  return (
    <animated.div
      style={{
        position: 'absolute',
        left: `${x}px`,
        ...props,
        backgroundColor: '#FF69B4',
        width: '40px',
        height: '60px',
        borderRadius: '20% 20% 0 0',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      }}
    />
  );
};

export default Balloon;
