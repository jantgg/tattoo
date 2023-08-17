"use client";
import React, { useEffect, useState, useNavigate } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import logo from "../../images/logo.png";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Navbar() {
  // i need state hook to manage some data in
  const [selected, setSelected] = useState(null);
  const isDesktop = window.innerWidth >= 1000;
  const [isInView, setIsInView] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up"); // Estado para almacenar la dirección del scroll
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Estado para almacenar la posición anterior del scroll

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
            } ${isInView ? " " : ""}`}
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
                  } ${isInView ? " text-black" : "  text-black"}`}
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
                  } ${isInView ? " text-black" : "  text-black"}`}
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
                  } ${isInView ? " text-black" : "  text-black"}`}
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
                  } ${isInView ? " text-black" : "  text-black"}`}
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
