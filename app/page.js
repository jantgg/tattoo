"use client";
import Image from "next/image";
import "./page.css";
import Studio from "images/estudio.jpg";
import Sucio from "images/sucio.png";
import SucioSB from "images/fondo-sinblanco.png";
import StudioF from "images/studiofuera.jpg";
import Logo from "images/logo.png";
import Tinta from "images/tintaroja3.png";
import BlancoAbajo from "images/paintwhitebot.png";
import BlancoArriba from "images/paint-light-top.png";
import Tatuando from "images/tatuando1.jpg";
import Tbanner from "images/header.png";
import SalpiconA from "images/salpiconarriba.png";
import SalpiconAb from "images/salpiconabajo.png";
import Sliderv from "components/sliderv/sliderv.js";
import Footer from "components/footer/footer.js";
import GalleryHome from "components/galleryhome/galleryhome.js";
import dynamic from "next/dynamic";
const Reviews = dynamic(() => import("components/reviews/reviews.js"), {
  ssr: false,
  loading: () => <p>Cargando...</p>,
});
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
          <Image alt="Descripción de la imagen"
            className={`jarallax-img animated-img ${
              isLoaded ? "is-visible" : ""
            }`}
            src={Studio}
         
            onLoad={handleImageLoaded}
          />

          <div className="logo-container">
            {" "}
            <Image alt="Descripción de la imagen" className="logo-header" src={Logo} />
          </div>

          <Image alt="Descripción de la imagen" className="sucio" src={Sucio} />
          <Image alt="Descripción de la imagen" className="imagen-abajo" src={BlancoAbajo} />
          <TbArrowDownRhombus className="arrow-icon" />
        </div>
      </header>
      <section className="section1">
        <Image alt="Descripción de la imagen" className="sucio2" src={Sucio} />
        {/* <div className="fondo-letras allura">Ink</div> */}
        <div className="section1-content">
          {" "}
          <div className="section1-text col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
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
            <Image alt="Descripción de la imagen" className="maquina" src={Logo} />
            <Image alt="Descripción de la imagen" className="tinta1" src={Tinta} />
          </div>{" "}
        </div>
      </section>
      <section id="interlude1" className="">
        <div className="jarallax2 vh30" data-jarallax data-speed="0.2">
          <Image alt="Descripción de la imagen" className="jarallax-img j2-filter" src={Tatuando} />
          <Image alt="Descripción de la imagen" className="imagen-abajo2" src={BlancoAbajo} />
          <Image alt="Descripción de la imagen" className="imagen-arriba2" src={BlancoArriba} />
          <h1 className="interlude-tittle rocker"></h1>
        </div>
      </section>
      <section className="section2">
        <Image alt="Descripción de la imagen" className="sucio" src={Sucio} />
        <header className="s2head">
          <h1 className="s2tittle rocker" data-text="Conoce a nuestro equipo">
            Conoce a nuestro equipo
          </h1>
          <Image alt="Descripción de la imagen" className="s2-img" src={Tbanner} />
        </header>
        <Sliderv />
        <Image alt="Descripción de la imagen" className="salpicon-abajo2" src={SalpiconA} />
      </section>

      <section className="section3">
        <GalleryHome />
      </section>

      <section id="interlude1" className="section4">
        <div className="jarallax2" data-jarallax data-speed="0.2">
          <Image alt="Descripción de la imagen" className="jarallax-img j2-filter" src={StudioF}  />
          <Image alt="Descripción de la imagen" className="imagen-abajo3" src={BlancoAbajo} />
          <header className="s4head">
            <h1 className="s4tittle rocker" data-text=" Reseñas de clientes">
              Reseñas de clientes
            </h1>
            <Image alt="Descripción de la imagen" className="s4-img" src={Tbanner} />
          </header>
          <Image alt="Descripción de la imagen" className="salpicon-arriba2" src={SalpiconAb} />
          <Reviews />
        </div>
      </section>
      <section className="contacto">
        <Image alt="Descripción de la imagen" className="suciosb" src={SucioSB} />
        <Footer />
      </section>
    </main>
  );
}
