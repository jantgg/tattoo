"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

import "./animateddiv.css";

const AnimatedDivUp = ({ children, classNameProps }) => {
  const divRef = useRef(null);

  useEffect(() => {
    const divElement = divRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              className: `animated-div-up entering-view-up ${
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
    <div ref={divRef} className={`animated-div-up ${classNameProps || ""}`}>
      {children}
    </div>
  );
};

export default AnimatedDivUp;
