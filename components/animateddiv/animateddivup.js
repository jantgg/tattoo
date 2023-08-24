"use client";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import useScrollPosition from 'app/hooks/useScrollPosition';

import "./animateddiv.css";

const AnimatedDivUp = ({ children }) => {
  const scrollPosition = useScrollPosition();
  const divRef = useRef(null);

  useEffect(() => {
    const divElement = divRef.current;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { className: 'animated-div-up entering-view-up' });
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
    <div ref={divRef} className="animated-div-up">
      {children}
    </div>
  );
};

export default AnimatedDivUp;



// "use client";
// import { useRef, useEffect, useState } from 'react';
// import { gsap } from 'gsap';
// import useScrollPosition from 'app/hooks/useScrollPosition';

// import "./animateddiv.css";

// const AnimatedDivUp = ({ children }) => {
//   const scrollPosition = useScrollPosition();
//   const divRef = useRef(null);
//   const [isInView, setIsInView] = useState(false);

//   useEffect(() => {
//     const divElement = divRef.current;

//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//           observer.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.8 });

//     if (divElement) {
//       observer.observe(divElement);
//     }

//     return () => {
//       if (divElement) {
//         observer.unobserve(divElement);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const scrollTimeout = setTimeout(() => {
//       if (isInView) {
//         gsap.to(divRef.current, { className: 'animated-div-up entering-view-up' });
//       }
//     }, 150); // Adjust the timeout duration as needed

//     return () => {
//       clearTimeout(scrollTimeout);
//     };
//   }, [scrollPosition, isInView]);

//   return (
//     <div ref={divRef} className="animated-div-up">
//       {children}
//     </div>
//   );
// };

// export default AnimatedDivUp;

