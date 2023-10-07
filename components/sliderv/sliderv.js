"use client";
import React, { useEffect, useState } from "react";
import "./sliderv.css";
import Bgtinta from "images/fondotintalargo2.png"
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger);

export default function Sliderv() {
  const [isInView, setIsInView] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDesk, setIsOpenDesk] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 700);
    }
  }, []);


  const handleScroll = () => {
    const currentScrollPos =
      window.scrollY || document.documentElement.scrollTop;
    setScrollDirection(currentScrollPos > prevScrollPos ? "down" : "up");
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    // Agregar un event listener para el evento de scroll al elemento window
    window.addEventListener("scroll", handleScroll);

    // Eliminar el event listener cuando se desmonte el componente para evitar pérdidas de memoria
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      // Verificar si currentPath no es "/"
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".navbar-scrolled").forEach(function (elem) {
        ScrollTrigger.create({
          trigger: elem,
          start: "top 20%",
          end: "bottom 0%",
          onEnter: () => {
            setIsInView(true); // Establecer el estado en true cuando se cumple la condición
          },
          onLeave: () => {
            setIsInView(false); // Establecer el estado en false cuando no se cumple la condición
          },
          onEnterBack: () => {
            setIsInView(true);
          },
          onLeaveBack: () => {
            setIsInView(false);
          },
        });
      });
    }
  }, []);
  return (
   <div></div>
  );
}
