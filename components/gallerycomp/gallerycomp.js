"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import pasta from "images/pasta.jpg";
import dapaolo from "images/dapaolo.jpg";
import boniato from "images/boniato.jpg";
import brakfast from "images/brakfast.jpg";
import ensaladatop from "images/ensalada-top.jpg";
import hambur from "images/hambur.jpg";
import pastaangulo from "images/pasta-angulo.jpg";
import pasta2 from "images/pasta-agulo-blanco.jpg";
import pinchopure from "images/pincho-pure.jpg";
import pizza from "images/steak-top.jpg";

import "./gallerycomp.css";

const Gallerycomp = () => {
  const images = [
    boniato,
    dapaolo,
    pasta,
    brakfast,
    ensaladatop,
    hambur,
    pastaangulo,
    pasta2,
    pinchopure,
    pizza,

  ];
  const [selectedImage, setSelectedImage] = useState(pasta); // Estado para la imagen principal
  const [isMobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 700 : false
  );

  const handleImageClick = (src) => {
    // Animación de cambio de imagen usando GSAP
    gsap.to(".main-img", {
      duration: 0.2,
      opacity: 0,
      onComplete: () => {
        setSelectedImage(src);
        gsap.to(".main-img", { duration: 0.2, opacity: 1 });
      },
    });
  };

  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const selectedImage2 = images[currentIndex];

  const handleNextClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length); // Vuelve al principio si estás al final
      setTimeout(() => {
        setIsVisible(true);
      }, 120);
    }, 120);
  };

  const handlePrevClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length); // Vuelve al final si estás al principio
      setTimeout(() => {
        setIsVisible(true);
      }, 120);
    }, 120);
  };

  return (
    <div id="gallery" className="myrow col-12">
      {isMobile ? (
        <>
          <div className="main-img-container col-10 col-sm-8 col-md-8 mx-auto mb-5">
            <Image
              src={selectedImage2}
              alt="Imagen"
              fill
              className="main-img"
              quality={70}
            />
          </div>
          <div className="col-12 btn-father justify-content-between d-flex">
            <button
              className={`boton-i ms-5 ${currentIndex === 0 ? "hide" : ""}`}
              onClick={handlePrevClick}
              disabled={currentIndex === 0}
              aria-label="presiona para retroceder"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <button
              className={`boton-i me-5${
                currentIndex === images.length - 1 ? "hide" : ""
              }`}
              onClick={handleNextClick}
              disabled={currentIndex === images.length - 1}
              aria-label="presiona para avanzar"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="main-img-container col-10 col-sm-8 col-md-8 mx-auto mb-5">
            <Image
              src={selectedImage}
              alt="Imagen"
              fill
              className="main-img"
              quality={70}
            />
          </div>
          <div className="all-img-container myrow col-12">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Imagen ${index}`}
                className="col-4 col-sm-2 col-md-2 img mx-2 my-2"
                quality={70}
                onClick={() => handleImageClick(src)} // Manejar el clic en la imagen
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Gallerycomp;
