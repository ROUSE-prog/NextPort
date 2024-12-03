import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Wrapper = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let particles = [];
      let numParticles = 8000;
      let formationType = 0;
      let formations = [];
      let t = 0;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.pixelDensity(3);
        p.noStroke();

        for (let i = 0; i < numParticles; i++) {
          particles.push(new Particle(p.random(p.width), p.random(p.height)));
        }

        formations = [
          (i) => {
            // Spiral
            let angle = p.map(i, 0, numParticles, 0, p.TWO_PI * 5);
            let radius = p.map(i, 0, numParticles, 0, p.min(p.width, p.height) / 3);
            return p.createVector(
              p.width / 2 + radius * p.cos(angle),
              p.height / 2 + radius * p.sin(angle)
            );
          },
          (i) => {
            // Flower
            let angle = p.map(i, 0, numParticles, 0, p.TWO_PI * 8);
            let radius = p.sin(4 * angle) * p.min(p.width, p.height) / 4;
            return p.createVector(
              p.width / 2 + radius * p.cos(angle),
              p.height / 2 + radius * p.sin(angle)
            );
          },
          (i) => {
            // Circle
            let angle = p.map(i, 0, numParticles, 0, p.TWO_PI);
            let radius = p.min(p.width, p.height) / 3;
            return p.createVector(
              p.width / 2 + radius * p.cos(angle),
              p.height / 2 + radius * p.sin(angle)
            );
          },
          (i) => {
            // Heart
            let angle = p.map(i, 0, numParticles, -p.PI, p.PI);
            let x = 16 * Math.pow(p.sin(angle), 3);
            let y =
              13 * p.cos(angle) -
              5 * p.cos(2 * angle) -
              2 * p.cos(3 * angle) -
              p.cos(4 * angle);
            return p.createVector(p.width / 2 + x * 10, p.height / 2 - y * 10);
          },
          (i) => {
            // Random Bezier Curve
            let p0 = p.createVector(p.random(p.width), p.random(p.height));
            let p1 = p.createVector(p.random(p.width), p.random(p.height));
            let p2 = p.createVector(p.random(p.width), p.random(p.height));
            let p3 = p.createVector(p.random(p.width), p.random(p.height));
            let t = p.map(i, 0, numParticles, 0, 1);
            let pos = cubicBezier(p0, p1, p2, p3, t);
            return pos;
          },
          (i) => {
            // Wave
            let x = p.map(i, 0, numParticles, 0, p.width);
            let y = p.height / 2 + p.sin(x / 50) * 100;
            return p.createVector(x, y);
          },
          (i) => {
            // Grid
            let cols = Math.floor(p.sqrt(numParticles));
            let rows = Math.floor(p.sqrt(numParticles));
            let x = (i % cols) * (p.width / cols);
            let y = Math.floor(i / cols) * (p.height / rows);
            return p.createVector(x, y);
          },
          (i) => {
            // Star
            let angle = p.map(i, 0, numParticles, 0, p.TWO_PI);
            let radius =
              i % 2 === 0
                ? p.min(p.width, p.height) / 4
                : p.min(p.width, p.height) / 8;
            return p.createVector(
              p.width / 2 + radius * p.cos(angle),
              p.height / 2 + radius * p.sin(angle)
            );
          },
          (i) => {
            // Infinity Symbol
            let t = p.map(i, 0, numParticles, -p.PI, p.PI);
            let x = 200 * p.sin(t);
            let y = 100 * p.sin(2 * t);
            return p.createVector(p.width / 2 + x, p.height / 2 + y);
          },
          (i) => {
            // Diamond
            let cols = Math.ceil(p.sqrt(numParticles));
            let rows = Math.ceil(p.sqrt(numParticles));
            let x = (i % cols) * (p.width / cols);
            let y =
              Math.abs(p.width / 2 - x) + Math.floor(i / cols) * (p.height / rows);
            return p.createVector(x, y);
          },
          (i) => {
            // Helix
            let zOffset = i % 20;
            let angle = p.map(i, 0, numParticles, 0, p.TWO_PI);
            let radius = p.min(p.width, p.height) / 3;
            return p.createVector(
              p.width / 2 + radius * p.cos(angle),
              p.height / 2 + radius * p.sin(angle - zOffset)
            );
          },
          (i) => {
            // Triangle
            let level = Math.floor(Math.sqrt(2 * i));
            let positionInLevel = i - (level * (level - 1)) / 2;
            let x =
              (positionInLevel - level / 2) * (p.width / (level + 1)) + p.width / 2;
            let y = level * (p.height / 15) + p.height / 4;
            return p.createVector(x, y);
          },
          (i) => {
            // Hexagon
            let angle = p.map(i % 6, 0, 6, 0, p.TWO_PI);
            let radius = p.map(Math.floor(i / 6), 0, numParticles / 6, 50, 300);
            return p.createVector(
              p.width / 2 + radius * p.cos(angle),
              p.height / 2 + radius * p.sin(angle)
            );
          },
          (i) => {
            // Sine Wave Cluster
            let x = p.map(i, 0, numParticles, 0, p.width);
            let y = p.height / 2 + p.sin(x / 20 + i * 0.1) * 100;
            return p.createVector(x, y);
          },
          (i) => {
            // Zigzag
            let x = p.map(i, 0, numParticles, 0, p.width);
            let y =
              p.height / 2 + (i % 2 === 0 ? -1 : 1) * 50 * (1 - Math.abs(x / p.width));
            return p.createVector(x, y);
          },
          (i) => {
            // Square Spiral
            let angle = p.map(i, 0, numParticles, 0, p.TWO_PI * 5);
            let radius = p.map(i, 0, numParticles, 0, p.min(p.width, p.height) / 3);
            return p.createVector(
              p.width / 2 + radius * p.cos(angle) * p.sin(angle * 2),
              p.height / 2 + radius * p.sin(angle) * p.cos(angle * 2)
            );
          },
          (i) => {
            // Concentric Circles
            let circleNum = Math.floor(i / 100);
            let radius = (circleNum + 1) * 50;
            let angle = p.map(i % 100, 0, 100, 0, p.TWO_PI);
            return p.createVector(
              p.width / 2 + radius * p.cos(angle),
              p.height / 2 + radius * p.sin(angle)
            );
          },
          (i) => {
            // Starburst
            let radius = p.map(i, 0, numParticles, 0, p.min(p.width, p.height) / 3);
            let angle = i % 2 === 0 ? p.random(p.TWO_PI) : p.random(p.PI);
            return p.createVector(
              p.width / 2 + radius * p.cos(angle),
              p.height / 2 + radius * p.sin(angle)
            );
          },
          (i) => {
            // Clover
            let angle = p.map(i, 0, numParticles, 0, p.TWO_PI * 5);
            let radius =
              p.min(p.width, p.height) / 4 + p.sin(3 * angle) * p.min(p.width, p.height) / 8;
            return p.createVector(
              p.width / 2 + radius * p.cos(angle),
              p.height / 2 + radius * p.sin(angle)
            );
          },
          (i) => {
            // Expanding Rings
            let ring = Math.floor(i / 50);
            let angle = p.map(i % 50, 0, 50, 0, p.TWO_PI);
            let radius = (ring + 1) * 30;
            return p.createVector(
              p.width / 2 + radius * p.cos(angle),
              p.height / 2 + radius * p.sin(angle)
            );
          },
          (i) => {
            // Tornado
            let angle = p.map(i, 0, numParticles, 0, p.TWO_PI * 3);
            let heightOffset = p.map(i, 0, numParticles, -p.height / 2, p.height / 2);
            let radius = p.min(p.width, p.height) / 4;
            return p.createVector(
              p.width / 2 + radius * p.cos(angle),
              p.height / 2 + heightOffset + radius * p.sin(angle)
            );
          },
        ];
        setFormation();
      };

      p.draw = () => {
        p.background(251);

        for (let particle of particles) {
          particle.update();
          particle.display();
        }
        t += 0.01;
      };

      p.mousePressed = () => {
        formationType = (formationType + 1) % formations.length;
        setFormation();
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        setFormation();
      };

      const setFormation = () => {
        for (let i = 0; i < particles.length; i++) {
          let target = formations[formationType](i);
          particles[i].setTarget(target.x, target.y);
        }
      };

      class Particle {
        constructor(x, y) {
          this.pos = p.createVector(x, y);
          this.target = p.createVector(x, y);
          this.vel = p5.Vector.random2D();
          this.acc = p.createVector();
          this.maxSpeed = 20;
          this.maxForce = 2;
          this.color = p.color(10, 5, 0);
          this.size = p.random(1, 3);
        }

        update() {
          let desired = p5.Vector.sub(this.target, this.pos);
          let d = desired.mag();
          let speed = this.maxSpeed;
          if (d < 100) {
            speed = p.map(d, 0, 100, 0, this.maxSpeed);
          }
          desired.setMag(speed);
          let steer = p5.Vector.sub(desired, this.vel);
          steer.limit(this.maxForce);

          this.acc.add(steer);
          this.vel.add(this.acc);
          this.vel.limit(this.maxSpeed);
          this.pos.add(this.vel);
          this.acc.mult(0);

          let speedMag = this.vel.mag();
          let alpha = p.map(speedMag, 0, this.maxSpeed, 50, 255);
          this.color.setAlpha(alpha);
        }

        display() {
          p.fill(this.color);
          p.ellipse(this.pos.x, this.pos.y, this.size);
        }

        setTarget(x, y) {
          this.target = p.createVector(x, y);
        }
      }

      const cubicBezier = (p0, p1, p2, p3, t) => {
        let a = p0.copy().mult(Math.pow(1 - t, 3));
        let b = p1.copy().mult(3 * t * Math.pow(1 - t, 2));
        let c = p2.copy().mult(3 * Math.pow(t, 2) * (1 - t));
        let d = p3.copy().mult(Math.pow(t, 3));
        return a.add(b).add(c).add(d);
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
