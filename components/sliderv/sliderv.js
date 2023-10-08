"use client";
import React, { useEffect, useState, useRef } from "react";
import "./sliderv.css";
import Bgtinta from "images/fondotintalargo2.png";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Jose from "images/jose.jpg";
import Maria from "images/maria.jpg";
import Paco from "images/paco.jpg";
import Decoesquina from "images/decoesquina.png";
import GrungeSlider from "images/grungeslider.png";
import Sombraroja from "images/rojocuadrao.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";
gsap.registerPlugin(ScrollTrigger);

export default function Sliderv() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const slide1Ref = useRef(null);
  const slide2Ref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isAspectRatio16by9, setIsAspectRatio16by9] = useState(false);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartY(e.clientY);
    setScrollY(sliderRef.current.scrollTop);

    console.log("Mouse DOWN - Start Y:", e.clientY); // Agregamos registro de consola
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaY = startY - e.clientY;
    sliderRef.current.scrollTop = scrollY + deltaY;

    console.log(
      "Mouse MOVE - Delta Y:",
      deltaY,
      "New Scroll Position:",
      scrollY + deltaY
    ); // Agregamos registro de consola
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    console.log("Mouse UP"); // Agregamos registro de consola
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 700);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const slider = sliderRef.current;
      const slideHeight = slide1Ref.current.clientHeight;
      const containerHeight = slider.clientHeight;

      if (slider.scrollTop + containerHeight <= slideHeight) {
        setCurrentSlide(0);
      } else if (slider.scrollTop + containerHeight <= 2 * slideHeight) {
        setCurrentSlide(1);
      } else {
        setCurrentSlide(2);
      }
    };

    const slider = sliderRef.current;
    slider.addEventListener("scroll", handleScroll);
    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const checkAspectRatio = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Calcula la relación de aspecto y verifica si es (aproximadamente) 16:9
      const aspectRatio = width / height;
      console.log(aspectRatio);
      setIsAspectRatio16by9(Math.abs(aspectRatio - 16 / 9) < 0.01); // Un pequeño margen de error
    };

    // Verifica la relación de aspecto inicial
    checkAspectRatio();

    // Escucha los cambios de tamaño de la ventana
    window.addEventListener("resize", checkAspectRatio);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", checkAspectRatio);
    };
  }, []);

  return (
    <div id="sliderv" className="sliderv">
      <Image className="deco-esquina" src={Decoesquina} />
      <div className="img-section-slider col-5">
        <div className="img-slider-container">
          {" "}
          <Image
            className={`img-slide ${currentSlide === 0 ? "active" : ""}`}
            src={Paco}
          />
          <Image
            className={`img-slide ${currentSlide === 1 ? "active" : ""}`}
            src={Jose}
          />
          <Image
            className={`img-slide ${currentSlide === 2 ? "active" : ""}`}
            src={Maria}
          />
          <Image className="img-grunge" src={GrungeSlider} />
        </div>

        <Image className="sombra-img" src={Sombraroja} />

        <div class="example example--2">
          <span class="scroll-icon">
            <span class="scroll-icon__dot"></span>
          </span>
        </div>
      </div>

      <div
        className="text-section-slider col-5"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="text-inner-slide" ref={slide1Ref}>
          <h1 className="tsh1 rocker" data-text="Sebastian Román">
            Sebastian Román
          </h1>
          <h2 className="tsh2 gabarito">TATUADOR Y FUNDADOR DE INKREDIBLE</h2>
          <p className="tsp gabarito">
            Sebastián Román, con el Mediterráneo como musa, ha convertido
            Marbella en el epicentro de su pasión por el tatuaje.
            <br></br> En 2010 fundó "Inkredible Tattoo Studio", convirtiendo
            rápidamente este rincón de la Costa del Sol en un emblema del arte
            corporal, especialmente en el estilo blackwork.
            <br></br>
            Con raíces en los murales marbellíes y tras un periplo de
            aprendizaje por España, Sebastián combinó tradición y vanguardia,
            destacándose por sus intensos y detallados diseños en negro,
            consolidando "Inkredible" como la referencia en blackwork en todo
            Marbella y más allá.
          </p>
          <p className="tsf allura">Sebastián Román</p>
        </div>
        <div className="text-inner-slide" ref={slide2Ref}>
          <h1 className="tsh1 rocker" data-text="Jose Morales">
            Jose Morales
          </h1>
          <h2 className="tsh2 gabarito">TATUADOR BLACKWORK EN PUNTILLISMO</h2>
          <p className="tsp gabarito">
            José Morales, imbuido del ritmo y precisión que el puntillismo
            requiere, ha dejado huella en la escena del tatuaje de Marbella con
            su enfoque innovador. <br></br>
            Siendo un maestro en la técnica del blackwork, José incorpora
            puntillismo de manera magistral, dando vida a diseños que combinan
            la oscuridad intensa con delicados matices, creando contrastes
            hipnóticos en la piel. <br></br>
            Desde su entrada en la escena en 2012, Morales se ha establecido
            como una autoridad en este nicho, haciendo de cada tatuaje una obra
            de arte meticulosamente detallada y con una profundidad que solo su
            técnica particular puede lograr.
          </p>
          <p className="tsf allura">Jose Morales</p>
        </div>
        <div className="text-inner-slide text-inner-slide-last">
          {" "}
          <h1 className="tsh1 rocker" data-text="Maria Becerra">
            Maria Becerra
          </h1>
          <h2 className="tsh2 gabarito">TATUADORA TRADICIONAL</h2>
          <p className="tsp gabarito">
            María Becerra, con un profundo respeto por las raíces y la historia
            del tatuaje, se ha consagrado como una de las figuras más destacadas
            en Marbella en el arte del estilo tradicional. <br></br>Su paleta,
            rica en colores vibrantes y trazos audaces, rememora la época dorada
            del tatuaje, dando vida a diseños atemporales que resuenan con la
            nostalgia del pasado y la frescura del presente.<br></br> Desde su
            irrupción en la escena en 2013, María ha sido una abanderada del
            estilo tradicional, perpetuando la esencia clásica del tatuaje en
            cada pulso de su máquina.
          </p>
          <p className="tsf allura">Maria Becerra</p>
        </div>{" "}
      </div>
    </div>
  );
}
