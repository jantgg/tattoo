"use client";
import React, { useState, useRef } from "react";
import "./slider.css";
import AnimatedDivUp from "../animateddiv/animateddivup.js";
import AnimatedDivLeft from "../animateddiv/animateddivleft.js";
import AnimatedDivRight from "../animateddiv/animateddivright.js";

//<SliderM data={bikesResults} groupSize={1} />

export default function Slider() {
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
  //   const [currentIndex, setCurrentIndex] = useState(0);
  //   const endIndex = data.length;
  //   console.log(endIndex);

  //   const dataToRender = data.slice(currentIndex, endIndex);
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => {
        setIsVisible(true);
      }, 5);
    }, 2);
  };

  const handlePrevClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(Math.max(currentIndex - 1, 0));
      setTimeout(() => {
        setIsVisible(true);
      }, 5);
    }, 2);
  };

  return (
    <div className="row slider">
      <div className="col-6 ">
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
                  Welcome to our exquisite Italian restaurant nestled in the
                  heart of Puerto Banús, where the charm of Mediterranean{" "}
                  <strong>flavors comes alive.</strong> As the{" "}
                  <strong>only establishment with coveted outdoor space</strong>{" "}
                  , we invite you to savor every bite while enjoying the gentle
                  sea breeze and the rhythmic symphony of the marina. It's an
                  experience that <strong>elevates dining</strong> to a new
                  level of delight.
                </p>
              </AnimatedDivUp>
              <AnimatedDivUp>
                <a href="/reserve" className="button-slider">
                  Location &#x27A1;
                </a>
              </AnimatedDivUp>
            </>
          ) : currentIndex === 1 ? (
            <>
              <AnimatedDivUp>
                {" "}
                <h1>Time-honored classics with a modern twist</h1>
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
              <AnimatedDivUp>
                <a href="/reserve" className="button-slider">
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
              <AnimatedDivUp>
                {" "}
                <a href="/reserve" className="button-slider">
                  Reservations &#x27A1;
                </a>
              </AnimatedDivUp>
            </>
          ) : null}
        </div>

        <div className="col-12 btn-father mb-3">
          <button
            className={` boton-i  ${currentIndex === 0 ? " hide" : " "}`}
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
            aria-label="press to backward"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <button
            className={` boton-i  ms-5 ${currentIndex === 2 ? " hide" : " "}`}
            onClick={handleNextClick}
            disabled={currentIndex === 2}
            aria-label="press to forward"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="col-6">
        {" "}
        {currentIndex === 0 ? (
          <AnimatedDivRight>
            {" "}
            <div className="col-11 img-slider-1 mx-auto"> </div>
          </AnimatedDivRight>
        ) : currentIndex === 1 ? (
          <AnimatedDivRight>
            {" "}
            <div className="col-11 img-slider-2 mx-auto"> </div>
          </AnimatedDivRight>
        ) : currentIndex === 2 ? (
          <AnimatedDivRight>
            {" "}
            <div className="col-11 img-slider-3 mx-auto"> </div>
          </AnimatedDivRight>
        ) : null}
      </div>
    </div>
  );
}
