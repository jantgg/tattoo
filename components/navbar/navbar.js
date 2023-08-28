"use client";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import useScrollPosition from "app/hooks/usescrollposition.js";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  const scrollPosition = useScrollPosition();

  const [isInView, setIsInView] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsDesktop(useMediaQuery({ query: '(max-width: 1000px)' }));
  }, []);

  const toggleCollap = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

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
  }, [prevScrollPos, handleScroll]);

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
      setIsInView(false);
    }
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

        {isDesktop ? (
          <div className={`navbar-nav ms-auto myrow ${isInView ? " " : " "}`}>
            <a
              href="/menu"
              className={`mx-2 me-5 px-2 deco-none  ${selected === 1 && ""} ${
                isInView ? " text-white line" : "  text-black line2"
              }`}
            >
              Menu
            </a>

            <a
              href="/where"
              className={` mx-2 me-5 px-2 deco-none ${selected === 2 && ""} ${
                isInView ? " text-white line" : "  text-black line2"
              }`}
            >
              Where are we?
            </a>

            <a
              href="/reservations"
              className={` mx-2 me-5 px-2 deco-none ${selected === 2 && ""} ${
                isInView ? " text-white line" : "  text-black line2"
              }`}
            >
              Reservations
            </a>

            <a
              href="/gallery"
              className={`mx-2 me-5 px-2 deco-none  ${selected === 0 && ""} ${
                isInView ? " text-white line" : "  text-black line2"
              }`}
            >
              Gallery
            </a>
          </div>
        ) : (
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
                  href="/menu"
                  className={` deco-none col-12 text-r mt-3  ${
                    selected === 1 && ""
                  } ${isInView ? " text-white line" : "  text-black line2"}`}
                >
                  Menu
                </a>

                <a
                  href="/where"
                  className={` deco-none col-12 text-r mt-3 ${
                    selected === 2 && ""
                  } ${isInView ? " text-white line" : "  text-black line2"}`}
                >
                  Where are we?
                </a>

                <a
                  href="/reservations"
                  className={` deco-none col-12 text-r mt-3 ${
                    selected === 2 && ""
                  } ${isInView ? " text-white line" : "  text-black line2"}`}
                >
                  Reservations
                </a>

                <a
                  href="/gallery"
                  className={` deco-none col-12 text-r mt-3  ${
                    selected === 0 && ""
                  } ${isInView ? " text-white line" : "  text-black line2"}`}
                >
                  Gallery
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
