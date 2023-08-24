"use client";
import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const mainElement = document.querySelector('main'); // Ajusta el selector según tu estructura
      if (mainElement) {
        const currentScrollPos = mainElement.scrollTop;
        setScrollPosition(currentScrollPos);
      }
    };

    const mainElement = document.querySelector('main'); // Ajusta el selector según tu estructura
    mainElement.addEventListener('scroll', handleScroll);

    return () => {
      mainElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
