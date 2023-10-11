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
        <div className="tittle-gallery-container col-3">
        <Image className="marco" src={Sucio3} />
          <h1 className="tittle-gallery rocker" data-text="Nuestros trabajos">Nuestros trabajos</h1>
        </div>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-3 img-gallery-container"
        >
             <Image className="marco" src={Grunge} />
          <Image src={Jose} alt="Imagen 2" className="img-gallery bordecito" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-3 img-gallery-container"
        >
          <Image src={Jose} alt="Imagen 3" className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-3 img-gallery-container"
        >
          <Image src={Jose} alt="Imagen 4" className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-3 img-gallery-container"
        >
          <Image src={Jose} alt="Imagen 5" className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-3 img-gallery-container"
        >
          <Image src={Jose} alt="Imagen 5" className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-3 img-gallery-container"
        >
          <Image src={Jose} alt="Imagen 5" className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-3 img-gallery-container"
        >
          <Image src={Jose} alt="Imagen 5" className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-3 img-gallery-container"
        >
          <Image src={Jose} alt="Imagen 5" className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-3 img-gallery-container"
        >
          <Image src={Jose} alt="Imagen 5" className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-3 img-gallery-container"
        >
          <Image src={Jose} alt="Imagen 5" className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-3 img-gallery-container"
        >
          <Image src={Jose} alt="Imagen 5" className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-3 img-gallery-container"
        >
          <Image src={Jose} alt="Imagen 5" className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-3 img-gallery-container"
        >
          <Image src={Jose} alt="Imagen 5" className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-3 img-gallery-container"
        >
          <Image src={Jose} alt="Imagen 5" className="img-gallery" />
        </a>
        <a
          href="/_next/static/media/jose.66c66803.jpg"
          data-fancybox
          data-caption="Single image"
          className="col-3 img-gallery-container"
        >
          <Image src={Jose} alt="Imagen 5" className="img-gallery" />
        </a>
      </div>
    </div>
  );
}
