"use client";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import useScrollPosition from 'app/hooks/useScrollPosition';

import "./animateddiv.css";

const AnimatedDivRight = ({ children }) => {
  const scrollPosition = useScrollPosition();
  const divRef = useRef(null);

  useEffect(() => {
    const divElement = divRef.current;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { className: 'animated-div-right entering-view-right' });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.8 });
    if (divElement) {
      observer.observe(divElement);
    }
    return () => {
      if (divElement) {
        observer.unobserve(divElement);
      }
    };
  }, []);

  return (
    <div ref={divRef} className="animated-div-right">
      {children}
    </div>
  );
};

export default AnimatedDivRight;