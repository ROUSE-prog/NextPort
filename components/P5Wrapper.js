import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Wrapper = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let t = 0.0;
      let vel = 0.2;
      let num;
      let magic = 0;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(sketchRef.current);
        p.colorMode(p.HSB, 255);
        magic = p.random(255);
        p.pixelDensity(2.8);
        p.angleMode(p.DEGREES);
        num = p.random(100000);
      };

      p.draw = () => {
        p.randomSeed(num);
        p.background(10, 10);
        p.stroke((magic + 60 + p.sin(p.frameCount / 30) * 120) % 255, 255, 255, 255);
        ribon(p.width / 2, p.height / 2, p.width * 0.5);
        t += vel;
      };

      const ribon = (x, y, r) => {
        p.push();
        p.translate(x, y);
        let a = 10;
        let b = 2;
        let delta = 100;

        for (let i = 0; i < 500; i++) {
          let n = 20 * p.noise(i / 10);
          let x = r * p.cos(n + a * i + t);
          let y = r * p.sin(n + b * i + delta + t);
          p.ellipse(x, p.random(y), 1);
        }
        p.pop();
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const p5Instance = new p5(sketch);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef} className="fixed top-0 left-0 w-full h-full z-0"></div>;
};

export default P5Wrapper;
