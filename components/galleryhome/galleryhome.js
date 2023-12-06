"use client";
import React, { useEffect, useState, useRef } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./galleryhome.css";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Jose from "images/jose.jpg";
import Sucio3  from "images/sucio3.png";
import Grunge  from "images/grungeslider.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Galleryhome() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      // Tus opciones personalizadas aquí
    });
  }, []);

  return (
    <div>
      <div className="gallery">
        <div className="tittle-gallery-container col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 ">
        <Image alt="Descripción de la imagen" className="marco" src={Sucio3} />
          <h1 className="tittle-gallery rocker" data-text="Nuestros trabajos">Nuestros trabajos</h1>
        </div>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 img-gallery-container"
        >
             <Image alt="Descripción de la imagen" className="marco" src={Grunge} />
          <Image alt="Descripción de la imagen" src={Jose} className="img-gallery bordecito" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 img-gallery-container"
        >
          <Image alt="Descripción de la imagen" src={Jose} className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 img-gallery-container"
        >
          <Image alt="Descripción de la imagen" src={Jose} className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 img-gallery-container"
        >
          <Image alt="Descripción de la imagen" src={Jose} className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 img-gallery-container"
        >
          <Image alt="Descripción de la imagen" src={Jose} className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 img-gallery-container"
        >
          <Image alt="Descripción de la imagen" src={Jose} className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 img-gallery-container"
        >
          <Image alt="Descripción de la imagen" src={Jose} className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 img-gallery-container"
        >
          <Image alt="Descripción de la imagen" src={Jose} className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 img-gallery-container"
        >
          <Image alt="Descripción de la imagen" src={Jose} className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 img-gallery-container"
        >
          <Image alt="Descripción de la imagen" src={Jose} className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 img-gallery-container"
        >
          <Image alt="Descripción de la imagen" src={Jose} className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 img-gallery-container"
        >
          <Image alt="Descripción de la imagen" src={Jose} className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 img-gallery-container"
        >
          <Image alt="Descripción de la imagen" src={Jose} className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 img-gallery-container"
        >
          <Image alt="Descripción de la imagen" src={Jose} className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 img-gallery-container"
        >
          <Image alt="Descripción de la imagen" src={Jose} className="img-gallery" />
        </a>
      </div>
    </div>
  );
}
