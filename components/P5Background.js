import React from 'react';
import dynamic from 'next/dynamic';

const P5Wrapper = dynamic(() => import('./P5Wrapper'), {
  ssr: false,
});

const P5Background = () => {
  return <P5Wrapper />;
};

export default P5Background;
