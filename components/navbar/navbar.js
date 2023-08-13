"use client"
import React, {useEffect, useState, useNavigate} from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import logo from "../../images/logo.png";
import '/styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.css'

export default function Navbar  () {
  // i need state hook to manage some data in
  const [selected, setSelected] = useState(null);
  const isDesktop = window.innerWidth >= 1000;
  const [isInView, setIsInView] = useState(true);


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

  const currentPath = window.location.pathname;

  useEffect(() => {
    if (currentPath !== "/") {
      setIsInView(false);
    }
  
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/") {
      // Verificar si currentPath no es "/"
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".navbar-scrolled").forEach(function (elem) {
        ScrollTrigger.create({
          trigger: elem,
          start: "top 100%",
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
 
      <nav
        style={{ zIndex: "99" }}
        className={`navbar mynav navbar-expand-lg mx-auto navbar-scrolled col-12  ${
          isInView ? " bg-gradient-1 py-5" : " bg-white-gradient shadowed "
        }`}
      >
        <div className="container-fluid col-11 ">
          <Link
            href="/services"
            className={`container-logo-navbar mx-auto${
              isDesktop ? " ms-5" : " ms-2"
            } ${isInView ? " hided" : ""}`}
            onClick={() => {
              scrollToTop();
            }}
          >
           HOLA
          </Link>
          <div></div>
          <button
            className={`navbar-toggler toggle-color ${
              isInView ? " toggle-color-white" : " toggle-color-black"
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
              <div className="nav-item ">
                <Link
                 href="/services"
                  target="_blank"
                  className={`nav-link mx-2 me-5 px-2 line  ${
                    selected === 0 && ""
                  } ${isInView ? " text-white" : "  text-black"}`}
                  onClick={() => {}}
                >
                  CITA PREVIA
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  href="/services"
                  className={`nav-link mx-2 me-5 px-2 line  ${
                    selected === 1 && ""
                  } ${isInView ? " text-white" : "  text-black"}`}
                  onClick={() => {}}
                >
                  MOTOS DE OCASIÓN
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
                  CONTACTO
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
 
  );
};