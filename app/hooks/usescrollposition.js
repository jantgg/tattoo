"use client"
import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const mainElement = document.querySelector("main");
    const currentScrollPos = mainElement.scrollTop;
    setScrollPosition(currentScrollPos);
  };

  useEffect(() => {
    const mainElement = document.querySelector("main");
    mainElement.addEventListener("scroll", handleScroll);

    return () => {
      mainElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
