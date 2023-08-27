"use client";
import Link from "next/link";
import Image from "next/image";
import "./gallery.css";
import pizza from "images/tabla.jpg";
import masa from "images/masa.jpg";
import { useEffect, useState } from "react";
import useScrollPosition from "../hooks/usescrollposition.js";
import AnimatedDivUp from "components/animateddiv/animateddivup.js";
import Gallerycomp from "components/gallerycomp/gallerycomp.js";

export default function Gallery() {
  const scrollPosition = useScrollPosition();

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

        <h1 className="header-tittle-l ">Take a look </h1>
        <h2 className="header-h2-l col-12">
          <div className="col-8 mx-auto">
            Enjoy watching our surroundings, food & restaurant
          </div>
        </h2>
      </div>
      <div className="section2 row col-12 mx-0 ">
        <div className="section2-inner row col-12 px-0">
          {" "}
         <Gallerycomp />
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
        <h2 className="interlude-text">
          "Discover a waterfront haven in Puerto Banús, where Mediterranean
          shores marries classic Mediterranean flavors with an exclusive terrace
          experience." - Chief.
        </h2>
      </div>
    </main>
  );
}
