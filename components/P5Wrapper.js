import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Wrapper = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let hu = 0;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.HSB, 255);
        hu = p.random(255);
      };
      
      p.draw = () => {
        p.background(250);
        p.stroke((hu + 120 + p.sin(p.frameCount / 6000) * 120) % 255, 200, 255, 100);
        p.strokeWeight(1.5);
        p.translate(p.height / 2, p.height / 1.5 + p.sin(p.frameCount / 230) * 200);
        branch(100 + p.sin(p.frameCount / 150) * 80);
      };

      const branch = (len) => {
        p.line(0, 0, 0, -len);
        p.translate(0, -len);

        p.push();
        p.rotate(p.PI / 120 + p.sin(p.frameCount / 60));
        if (len > 4) {
          branch(len * 0.8);
        }
        p.pop();

        p.push();
        p.rotate(-p.PI / 4 + p.cos(p.frameCount / 60));
        if (len > 8) {
          branch(len * 0.6);
        }
        p.pop();
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef} className="fixed top-0 left-0 w-full h-full z-0"></div>;
};

export default P5Wrapper;
