"use client";
import Image from "next/image";
import "./page.css";
import Studio from "images/estudio.jpg";
import Sucio from "images/sucio.png";
import Logo from "images/logo.png";
import Tinta from "images/tintaroja3.png";
import BlancoAbajo from "images/paintwhitebot.png";
import BlancoArriba from "images/paint-light-top.png";
import Tatuando from "images/tatuando1.jpg";
import Tbanner from "images/header.png"
import AnimatedDivUp from "components/animateddiv/animateddivup.js";
import AnimatedDivRight from "components/animateddiv/animateddivright.js";
import Footer from "components/footer/footer.js";
import { useState, useEffect } from "react";
import { TbArrowDownRhombus } from "react-icons/tb";

export default function Home() {
  const [isSmall, setIsSmall] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSmall(window.innerWidth <= 1200);
      setIsMobile(window.innerWidth <= 700);
    }
  }, []);

  useEffect(() => {
    let jarallaxElems;
    if (typeof window !== "undefined") {
      const { jarallax } = require("jarallax");
      jarallaxElems = document.querySelectorAll(".jarallax, .jarallax2");
      if (jarallaxElems.length) {
        jarallax(jarallaxElems, {
          speed: 0.2,
        });
      }
    }

    return () => {
      if (jarallaxElems && jarallaxElems.length) {
        jarallax(jarallaxElems, "destroy");
      }
    };
  }, []);

  return (
    <main>
      <header id="header1">
        <div className="jarallax" data-jarallax data-speed="0.2">
          <Image
            className={`jarallax-img animated-img ${
              isLoaded ? "is-visible" : ""
            }`}
            src={Studio}
            alt=""
            onLoad={handleImageLoaded}
          />

          <div className="logo-container">
            {" "}
            <Image className="logo-header" src={Logo} />
          </div>

          <Image className="sucio" src={Sucio} />
          <Image className="imagen-abajo" src={BlancoAbajo} />
          <TbArrowDownRhombus className="arrow-icon" />
        </div>
      </header>
      <section className="section1">
        <Image className="sucio2" src={Sucio} />
        {/* <div className="fondo-letras allura">Ink</div> */}
        <div className="section1-content">
          {" "}
          <div className="section1-text col-6">
            {" "}
            <h1 className="tittle1 rocker" data-text="Bienvenidos a Inkredible">
              Bienvenidos a Inkredible
            </h1>
            <h2 className="tittle2 gabarito">
              EL MEJOR ESTUDIO DE TATTO EN MARBELLA
            </h2>
            <p className="parrafo1 gabarito">
              Si deseas agendar un encuentro con nuestro equipo, accede a
              nuestra sección de contacto y comunícate con nosotros vía
              teléfono, email o Whatsapp para contarnos qué diseño tienes en
              mente. <br></br>
              Si estás en busca de ideas, te invitamos a explorar nuestras
              galerías en las categorías de trabajos y artistas.
              <br></br>
              Recuerda también revisar nuestras recomendaciones sobre el
              mantenimiento y cuidado higiénico de tus tatuajes y piercings.
            </p>
            <p className="firma allura">Sebastián Román</p>
          </div>
          <div className="section1-img col-6">
            <Image className="maquina" src={Logo} />
            <Image className="tinta1" src={Tinta} />
          </div>{" "}
        </div>
      </section>
      <section id="interlude1" className="">
        <div className="jarallax2" data-jarallax data-speed="0.2">
          <Image className="jarallax-img j2-filter" src={Tatuando} alt="" />
          <Image className="imagen-abajo2" src={BlancoAbajo} />
          <Image className="imagen-arriba2" src={BlancoArriba} />
          <h1
            className="interlude-tittle rocker"
            data-text="TU ESTUDIO DE TATUAJES Y PIERCING"
          >
            TU ESTUDIO DE TATUAJES Y PIERCING
          </h1>
        </div>
      </section>
      <section className="section2">
      <Image className="sucio" src={Sucio} />
            <header className="s2head">
              <h1 className="s2tittle rocker" data-text="CONOCE A NUESTRO EQUIPO">CONOCE A NUESTRO EQUIPO</h1>
              <Image className="s2-img" src={Tbanner}/>
            </header>
      </section>
    </main>
  );
}
