"use client";
import Image from "next/image";
import React, { useState} from "react";
import "./slider.css";
import AnimatedDivUp from "../animateddiv/animateddivup.js";
import dapaolo from "images/dapaolo.jpg";
import pasta from "images/pasta-angulo.jpg";
import people from "images/people.jpg";

export default function Slider() {
  const isSmall = window.innerWidth < 1200;
  const isMobile = window.innerWidth < 700;
  const data = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dsbp8pqdb/image/upload/v1692393460/pexels-natasha-filippovskaya-4394612_z1lpab_duhxsx.jpg",
      tittle: "Discover us",
      text: "Welcome to our exquisite Italian restaurant nestled in the heart of Puerto Banús, where the charm of Mediterranean flavors comes alive. As the only establishment with this coveted outdoor space, we invite you to savor every bite while enjoying the gentle sea breeze and the rhythmic symphony of the marina. It's an experience that elevates dining to a new level of delight.",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dsbp8pqdb/image/upload/v1692384101/puerto_oiusxr.jpg",
      tittle: "Time-honored classics with a modern twist",
      text: `Indulge in a curated collection of classic Mediterranean dishes that have been lovingly crafted by our talented chefs. Each plate tells a story of time-honored recipes, handed down through generations, and infused with a touch of modern creativity. Our menu is a celebration of flavors, textures, and aromas that transport you to the sun-drenched shores of Italy.`,
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dsbp8pqdb/image/upload/v1692393460/pexels-natasha-filippovskaya-4394612_z1lpab_duhxsx.jpg",
      tittle: " Inviting ambiance for every occasion",
      text: "Whether you're seeking an intimate dinner for two or a joyous gathering with friends, our restaurant offers a warm and inviting atmosphere that effortlessly complements the beauty of its surroundings. Join us to embark on a culinary voyage that connects your heart to the Mediterranean soul, where every moment is a celebration of la dolce vita.",
    },
  ];
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => {
        setIsVisible(true);
      }, 120);
    }, 120);
  };

  const handlePrevClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(Math.max(currentIndex - 1, 0));
      setTimeout(() => {
        setIsVisible(true);
      }, 120);
    }, 120);
  };

  return (
    <div className={`row slider col-12 px-0  ${isVisible ? "visible" : ""}`}>
      <div className="col-12 col-sm-6 col-md-6 px-0">
        <div className="text-side">
          {" "}
          {currentIndex === 0 ? (
            <>
              <AnimatedDivUp>
                {" "}
                <h1>Get to know us</h1>
              </AnimatedDivUp>
              <AnimatedDivUp>
                {" "}
                <p>
                  Welcome to our exquisite Italian restaurant nested in the
                  heart of Puerto Banús, where the charm of Mediterranean{" "}
                  <strong>flavors comes alive.</strong> As the{" "}
                  <strong>only establishment with coveted outdoor space</strong>{" "}
                  , we invite you to savor every bite while enjoying the gentle
                  sea breeze and the rhythmic symphony of the marina. An
                  experience that <strong>elevates dining</strong> to a new
                  level of delight.
                </p>
              </AnimatedDivUp>
              <AnimatedDivUp classNameProps="col-6 me-auto">
                <a href="/where" className="button-slider">
                  Location &#x27A1;
                </a>
              </AnimatedDivUp>
            </>
          ) : currentIndex === 1 ? (
            <>
              <AnimatedDivUp>
                {" "}
                {isSmall ? (
                  <h1>Time-honored classics</h1>
                ) : (
                  <h1>Time-honored classics with a modern twist</h1>
                )}
              </AnimatedDivUp>
              <AnimatedDivUp>
                {" "}
                <p>
                  Indulge in a curated collection of{" "}
                  <strong>classic Mediterranean dishes </strong>
                  that have been lovingly crafted by our{" "}
                  <strong>talented chefs.</strong> Each plate tells a story of{" "}
                  <strong>time-honored recipes,</strong> handed down through
                  generations, and infused with a touch of modern creativity.
                  Our menu is a celebration of{" "}
                  <strong>flavors, textures,</strong> and{" "}
                  <strong>aromas</strong> that transport you to the sun-drenched
                  shores of Italy.
                </p>
              </AnimatedDivUp>
              <AnimatedDivUp classNameProps="col-6 me-auto">
                <a href="/menu" className="button-slider">
                  Menu &#x27A1;
                </a>
              </AnimatedDivUp>
            </>
          ) : currentIndex === 2 ? (
            <>
              <AnimatedDivUp>
                {" "}
                <h1>Inviting ambiance for every occasion</h1>
              </AnimatedDivUp>
              <AnimatedDivUp>
                {" "}
                <p>
                  Whether you're seeking an intimate dinner for two or a joyous
                  gathering with friends, our restaurant offers a{" "}
                  <strong>warm</strong> and
                  <strong> inviting atmosphere</strong> that effortlessly
                  complements the beauty of its surroundings. Join us to embark
                  on a <strong>culinary voyage</strong> that connects your heart
                  to the Mediterranean soul, where every moment is a{" "}
                  <strong>celebration of la dolce vita.</strong>
                </p>{" "}
              </AnimatedDivUp>
              <AnimatedDivUp classNameProps="col-6 me-auto">
                {" "}
                {isSmall ? (
                  <a href="/reservations" className="button-slider">
                  Reservations
                </a>
                ) : (
                     <a href="/reservations" className="button-slider">
                  Reservations &#x27A1;
                </a>
                )}
           
              </AnimatedDivUp>
            </>
          ) : null}
        </div>

        <div className="col-12 btn-father">
          <button
            className={` boton-i  ${currentIndex === 0 ? " hide" : " "}`}
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
            aria-label="press to backward"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <button
            className={` boton-i   ${isMobile ? " ms-3 me-3" : "ms-5  "} ${currentIndex === 2 ? " hide" : " "}`}
            onClick={handleNextClick}
            disabled={currentIndex === 2}
            aria-label="press to forward"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="col-6 relative px-0 slider-container-img">
        {" "}
        {currentIndex === 0 ? (
          <Image
            src={dapaolo}
            fill
            quality={100}
            className="img-slider mx-auto"
            alt="puerto banus image"
          />
        ) : currentIndex === 1 ? (
          <Image
            src={pasta}
            fill
            quality={100}
            className="img-slider mx-auto"
            alt="puerto banus image"
          />
        ) : currentIndex === 2 ? (
          <Image
            src={people}
            fill
            quality={100}
            className="img-slider mx-auto"
            alt="puerto banus image"
          />
        ) : null}
      </div>
    </div>
  );
}
