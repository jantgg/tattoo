"use client";
import Link from "next/link";
import Image from "next/image";
import "./location.css";
import pizza from "images/tabla.jpg";
import masa from "images/masa.jpg";
import { useEffect, useState } from "react";
import useScrollPosition from "../hooks/usescrollposition.js";
import AnimatedDivUp from "components/animateddiv/animateddivup.js";
import Footer from "components/footer/footer.js";

export default function Location() {
  const scrollPosition = useScrollPosition();
  const isSmall = window.innerWidth < 1200;

  useEffect(() => {
    // Lógica específica para Page1 que se ejecutará cuando cambie la posición del scroll
  }, [scrollPosition]);

  return (
    <main className="wrapper-l">
      <div id="header" className="header-l flex-column">
        <Image
          src={pizza}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="header-img-l"
          alt="marmoled background"
          loading="eager"
          placeholder="blur"
          priority={true}
        />

        <h1 className="header-tittle-l ">Come and meet us </h1>
        <h2 className="header-h2-l col-12">
          <div className="col-12 col-sm-8 col-md-8 mx-auto">
            Join us by the water's edge at Puerto Banús and experience authentic
            Italian Mediterranean cuisine. Your table is waiting.
          </div>
        </h2>
      </div>

      <div className="section2 row col-12 mx-0 ">
        {" "} <div className="col-12 col-sm-6 col-md-6 flex-column  text-side-location">
          {" "}
          <AnimatedDivUp>
          {isSmall ? (
                <h1 className="col-12 mt-3">
              Mediterranean Coastal Charm in Puerto Banús{" "}
            </h1>
                ) : (
                  <h1 className="col-12 mt-3">
              Mediterranean Coastal Charm in Puerto Banús{" "}
            </h1>
                )}
        
          </AnimatedDivUp>
          <AnimatedDivUp>
            {" "}
            <p className="lato">
              Where <strong>elegance meets the sea breeze</strong>, where
             flavors come to life on every plate. We invite you
              to immerse yourself in an{" "}
              <strong>exceptional culinary experience</strong> at our
               restaurant in Puerto Banús.<br></br>
              Your table is ready to welcome you with the finest of our
              gastronomic offerings, designed to capture the true spirit of 
              <strong> Mediterranean cuisine</strong> with an authentically Italian touch.
            </p>{" "}
          </AnimatedDivUp>
          <AnimatedDivUp>
            {" "}
            <div className="">
              {" "}
              <a href="https://goo.gl/maps/4aCcwVAce1JkRDgv9" target="_blank" className="button mb-5">
                Location &#x27A1;
              </a>
            </div>
          </AnimatedDivUp>
        </div>
        <div className="col-12 col-sm-6 col-md-6 mb-map">
          {" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12831.078887425943!2d-4.952996!3d36.4872776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7329c0f7585077%3A0xbf8250c125e84b37!2sDa%20Paolo!5e0!3m2!1ses!2ses!4v1692985400886!5m2!1ses!2ses"
            className="map"
        
            loading="lazy"
          
          ></iframe>
        </div>
       
      </div>

      <div className="interlude-location-img">
        <Image
          src={masa}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="interlude2-img"
          alt="man knead dough"
        />
     
      </div>
      <div className="footer-l">
      <Footer/>
      </div>
    </main>
  );
}
