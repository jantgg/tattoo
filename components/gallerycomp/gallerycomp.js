"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import useScrollPosition from "app/hooks/useScrollPosition";
import pasta from "images/pasta.jpg";
import dapaolo from "images/dapaolo.jpg";
import "./gallerycomp.css";

const Gallerycomp = () => {
  const images = [pasta, dapaolo, pasta,pasta, dapaolo, pasta,pasta, dapaolo, pasta,pasta]; // Agrega aquí las imágenes importadas
  const [selectedImage, setSelectedImage] = useState(pasta); // Estado para la imagen principal

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

  return (
    <div id="gallery" className="myrow col-12">
      <div className="main-img-container col-8 mx-auto mb-5">
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
            className="col-2 img mx-2 my-2"
            quality={70}
            onClick={() => handleImageClick(src)} // Manejar el clic en la imagen
          />
        ))}
      </div>
    </div>
  );
};

export default Gallerycomp;
