"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

import "./animateddiv.css";

const AnimatedDivRight = ({ children, classNameProps }) => {
  const divRef = useRef(null);

  useEffect(() => {
    const divElement = divRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              className: `animated-div-right entering-view-right ${
                classNameProps || ""
              }`,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8 }
    );

    if (divElement) {
      observer.observe(divElement);
    }

    return () => {
      if (divElement) {
        observer.unobserve(divElement);
      }
    };
  }, [classNameProps]);

  return (
    <div ref={divRef} className={`animated-div-right relative ${classNameProps || ""}`}>
      {children}
    </div>
  );
};

export default AnimatedDivRight;
