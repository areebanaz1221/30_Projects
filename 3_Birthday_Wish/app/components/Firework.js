"use client";

import React from 'react';
import { useSpring, animated } from 'react-spring';

const Firework = () => {
  const props = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0)' },
    config: { tension: 200, friction: 10 },
  });

  return (
    <animated.div
      style={{
        ...props,
        position: 'absolute',
        width: '200px',
        height: '200px',
        backgroundColor: 'rgba(255, 0, 0, 0.7)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }}
    />
  );
};

export default Firework;
