"use client"
import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const wrapperElement = document.querySelector(".wrapper");
    const currentScrollPos = wrapperElement.scrollTop;
    setScrollPosition(currentScrollPos);
  };

  useEffect(() => {
    const wrapperElement = document.querySelector(".wrapper");
    wrapperElement.addEventListener("scroll", handleScroll);

    return () => {
      wrapperElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
