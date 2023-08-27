"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import logo from "../../images/logo.png";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Navbar({scrollPosition}) {
  const router = useRouter()
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1000);
  const [isInView, setIsInView] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleScroll = () => {
    const mainElement = document.querySelector("main");
    const currentScrollPos = mainElement.scrollTop;
    setScrollDirection(currentScrollPos > prevScrollPos ? "down" : "up");
    setPrevScrollPos(currentScrollPos);
  };
  
  useEffect(() => {
    const mainElement = document.querySelector("main");
    mainElement.addEventListener("scroll", handleScroll);
  
    return () => {
      mainElement.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  
  const scrollToBottom = () => {
    const mainElement = document.querySelector("main");
    mainElement.scrollTo({
      top: mainElement.scrollHeight,
      behavior: "smooth",
    });
  };
  
  const scrollToTop = () => {
    const mainElement = document.querySelector("main");
    mainElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const currentPath = window.location.pathname;

  useEffect(() => {
    if (currentPath !== "/") {
      setIsInView(false);
    }
  }, [currentPath]);



    useEffect(() => {
      if (scrollPosition < 200) {
        setIsInView(true);
      } else {
        setIsInView(false);}
    }, [scrollPosition]);


  return (
   
      <nav
        style={{ zIndex: "99" }}
        className={`navbar mynav navbar-expand-lg  navbar-scrolled   ${
          isInView
            ? " bg-gradient-1 py-3 col-12"
            : " bg-white-gradient shadowed mt-3 mynav2"
        }
        ${scrollDirection === "down" ? "hided" : ""}
        `}
      >
        <div className={`container-fluid  ${isInView ? "col-11" : "col-12"}`}>
          <a
            href="/"
            className={`navbar-tittle mx-auto text-black no-deco${
              isDesktop ? " ms-5" : " ms-2"
            } ${isInView ? " text-white line" : "  text-black line2"}`}
            onClick={() => {
              scrollToTop();
            }}
          >
            Da Paolo
          </a>
          <div></div>
          <button
            className={`navbar-toggler  toggle-color-black ${
              isInView ? " " : " "
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className=" collapse navbar-collapse " id="navbarNavDropdown">
            <ul className={`navbar-nav ms-auto ${isInView ? " " : " "}`}>
             

              <div className="nav-item">
                <a
                  href="/menu"
                  className={`nav-link mx-2 me-5 px-2   ${
                    selected === 1 && ""
                  } ${isInView ? " text-white line" : "  text-black line2"}`}
             
                >
                  Menu
                </a>
              </div>
              <div className="nav-item">
                <a
                  href="/location"
                  className={`nav-link  mx-2 me-5 px-2  ${
                    selected === 2 && ""
                  } ${isInView ? " text-white line" : "  text-black line2"}`}
                  
                >
                  Where are we?
                </a>
              </div>
              <div className="nav-item">
                <a
                  href="/reservations"
                  className={`nav-link  mx-2 me-5 px-2  ${
                    selected === 2 && ""
                  } ${isInView ? " text-white line" : "  text-black line2"}`}
              
                >
                  Reservations
                </a>
              </div>
              <div className="nav-item ">
                <a
                  href="/gallery"
                  className={`nav-link mx-2 me-5 px-2   ${
                    selected === 0 && ""
                  } ${isInView ? " text-white line" : "  text-black line2"}`}
              
                >
                  Gallery
                </a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
   
  );
}
