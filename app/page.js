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
import AnimatedDivUp from "components/animateddiv/animateddivup.js";
import AnimatedDivRight from "components/animateddiv/animateddivright.js";
import Footer from "components/footer/footer.js";
import { useState, useEffect } from "react";
import { TbArrowDownRhombus } from "react-icons/tb";

export default function Home() {
  const [isSmall, setIsSmall] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSmall(window.innerWidth <= 1200);
      setIsMobile(window.innerWidth <= 700);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { jarallax } = require("jarallax");

      // Inicializa el primer contenedor
      jarallax(document.querySelector(".jarallax"), {
        speed: 0.2,
      });

       jarallax(document.querySelector(".jarallax2"), {
         speed: 0.2,
       });
    }
}, []);

  return (
    <main>
      <header>
        <div className="jarallax" data-jarallax data-speed="0.2">
          <Image className="jarallax-img" src={Studio} alt="" />
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
        <div className="fondo-letras allura">Ink</div>
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
      <section className="">
        <div className="jarallax2" data-jarallax data-speed="0.2">
          <Image className="jarallax2-img" src={Tatuando} alt="" />
          <Image className="imagen-abajo2" src={BlancoAbajo} />
          <Image className="imagen-arriba2" src={BlancoArriba} />
          <h1 className="interlude-tittle rocker" data-text="ESTUDIO DE TATUAJES Y PIERCING">ESTUDIO DE TATUAJES Y PIERCING</h1>
        </div>
      </section>
      <section className="section2"></section>
    </main>
  );
}
