"use client";
import React, { useEffect, useState, useNavigate } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import logo from "../../images/logo.png";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Navbar({scrollPosition}) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1000);
  const [isInView, setIsInView] = useState(scrollPosition < 200);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleScroll = () => {
    const wrapperElement = document.querySelector(".wrapper");
    const currentScrollPos = wrapperElement.scrollTop;
    setScrollDirection(currentScrollPos > prevScrollPos ? "down" : "up");
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    const wrapperElement = document.querySelector(".wrapper");
    wrapperElement.addEventListener("scroll", handleScroll);

    return () => {
      wrapperElement.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollToBottom = () => {
    const wrapperElement = document.querySelector(".wrapper");
    wrapperElement.scrollTo({
      top: wrapperElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    const wrapperElement = document.querySelector(".wrapper");
    wrapperElement.scrollTo({
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
      console.log(scrollPosition);
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
          <Link
            href="/"
            className={`navbar-tittle mx-auto text-black no-deco${
              isDesktop ? " ms-5" : " ms-2"
            } ${isInView ? "hided " : ""}`}
            onClick={() => {
              scrollToTop();
            }}
          >
            Da Paolo
          </Link>
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
            <i class="fa-solid fa-bars"></i>
          </button>
          <div className=" collapse navbar-collapse " id="navbarNavDropdown">
            <ul className={`navbar-nav ms-auto ${isInView ? " " : " "}`}>
             

              <div className="nav-item">
                <Link
                  href="/services"
                  className={`nav-link mx-2 me-5 px-2 line  ${
                    selected === 1 && ""
                  } ${isInView ? " text-white" : "  text-black"}`}
                  onClick={() => {}}
                >
                  Menu
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  href="/services"
                  className={`nav-link  mx-2 me-5 px-2 line ${
                    selected === 2 && ""
                  } ${isInView ? " text-white" : "  text-black"}`}
                  onClick={() => scrollToBottom()}
                >
                  Where are we?
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  href="/services"
                  className={`nav-link  mx-2 me-5 px-2 line ${
                    selected === 2 && ""
                  } ${isInView ? " text-white" : "  text-black"}`}
                  onClick={() => scrollToBottom()}
                >
                  Reservations
                </Link>
              </div>
              <div className="nav-item ">
                <Link
                  href="/about"
                  className={`nav-link mx-2 me-5 px-2 line  ${
                    selected === 0 && ""
                  } ${isInView ? " text-white" : "  text-black"}`}
                  onClick={() => {}}
                >
                  About
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
   
  );
}
