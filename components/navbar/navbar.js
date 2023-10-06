"use client";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import Bgtinta from "images/fondotintalargo2.png"
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
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

  const toggleCollap = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const toggleCollapDesk = () => {
    setIsOpenDesk((prevIsOpenDesk) => !prevIsOpenDesk);
  };
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
    <nav
      style={{ zIndex: "99" }}
      className={`navbar mynav navbar-expand-lg allura navbar-scrolled   ${
        isInView ? " py-3 col-12" : " mt-3 mynav2"
      }
        ${scrollDirection === "down" ? "hided" : ""}
        `}
    >
      {isInView ? <></> :    <Image className="bg-tinta" src={Bgtinta}/>}
   
      <div className={`container-fluid  ${isInView ? "col-12" : "col-12"}`}>
        <a
          href="/"
          className={`navbar-tittle mx-auto text-white no-deco  ${
            isMobile ? " ms-5" : " ms-5"
          } ${isInView ? " text-white " : "  text-white padding-tinta"}`}
          onClick={() => {
            scrollToTop();
          }}
        >
          Inkredible
        </a>

        {isMobile ? (
          <>
            {" "}
            <div className="collap-nav myrow col-2">
              <div
                className={` ms-auto ${
                  isInView ? " text-white " : "  text-black "
                }`}
              >
                <input
                  type="checkbox"
                  id="checkbox"
                  className="toggle"
                  onChange={toggleCollap}
                />
                <label htmlFor="checkbox" className="toggle">
                  <div
                    className={`bars ${isInView ? "bg-w" : "bg-b"}`}
                    id="bar1"
                  ></div>

                  <div
                    className={`bars ${isInView ? "bg-w" : "bg-b"}`}
                    id="bar2"
                  ></div>

                  <div
                    className={`bars ${isInView ? "bg-w" : "bg-b"}`}
                    id="bar3"
                  ></div>
                </label>
              </div>
            </div>
            <div className={`collap-wrapper col-12 ${isOpen ? "open" : ""}`}>
              <div className="collap-content myrow">
                <a
                  href="/artistas"
                  className={` deco-none col-12 text-r mt-3  ${
                    selected === 1 && ""
                  } ${isInView ? " text-white " : "  text-black "}`}
                >
                  Artistas
                </a>

                <a
                  href="/trabajos"
                  className={` deco-none col-12 text-r mt-3 ${
                    selected === 2 && ""
                  } ${isInView ? " text-white " : "  text-black "}`}
                >
                  Trabajos
                </a>

                <a
                  href="/cuidados"
                  className={` deco-none col-12 text-r mt-3 ${
                    selected === 2 && ""
                  } ${isInView ? " text-white " : "  text-black "}`}
                >
                  Cuidados
                </a>

                <a
                  href="/contacto"
                  className={` deco-none col-12 text-r mt-3  ${
                    selected === 0 && ""
                  } ${isInView ? " text-white " : "  text-black "}`}
                >
                  Contacto
                </a>
              </div>
            </div>
          </>
        ) : (
          <div className={`navbar-nav ms-auto  ${isInView ? " " : " "}`}>
            <div className={`navbar-content ${isOpenDesk ? "opened" : ""}`}>
              <a
                href="/artistas"
                className={`mx-2 me-5 px-2 deco-none  ${selected === 1 && ""} ${
                  isInView ? " text-white " : "  text-white "
                }`}
              >
                Artistas
              </a>

              <a
                href="/trabajos"
                className={` mx-2 me-5 px-2 deco-none ${selected === 2 && ""} ${
                  isInView ? " text-white " : "  text-white "
                }`}
              >
                Trabajos
              </a>

              <a
                href="/cuidados"
                className={` mx-2 me-5 px-2 deco-none ${selected === 2 && ""} ${
                  isInView ? " text-white " : "  text-white "
                }`}
              >
                Cuidados
              </a>

              <a
                href="/contacto"
                className={`mx-2 me-5 px-2 deco-none  ${selected === 0 && ""} ${
                  isInView ? " text-white " : "  text-white "
                }`}
              >
                Contacto
              </a>
            </div>

            <div className="block me-5">
            <input
                  type="checkbox"
                  id="checkbox"
                  className="toggle"
                  onChange={toggleCollapDesk}
                />
                <label htmlFor="checkbox" className="toggle">
                  <div
                    className={`bars ${isInView ? "bg-w" : "bg-w"}`}
                    id="bar1"
                  ></div>

                  <div
                    className={`bars ${isInView ? "bg-w" : "bg-w"}`}
                    id="bar2"
                  ></div>

                  <div
                    className={`bars ${isInView ? "bg-w" : "bg-w"}`}
                    id="bar3"
                  ></div>
                </label>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
