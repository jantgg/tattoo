"use client";
import Link from "next/link";
import Image from "next/image";
import "./gallery.css";
import pizza from "images/banus.jpg";
import masa from "images/pizza-top-blanco.jpg";
import { useEffect, useState } from "react";

import AnimatedDivUp from "components/animateddiv/animateddivup.js";
import Gallerycomp from "components/gallerycomp/gallerycomp.js";
import Footer from "components/footer/footer.js";

export default function Gallery() {
  return (
    <main className="wrapper-l">
      <div id="header" className="header-l flex-column">
        <Image
          src={pizza}
          layout="fill"
          objectFit="cover"
          quality={50}
          className="header-img-l"
          alt="marmoled background"
          loading="eager"
          placeholder="blur"
          priority={true}
        />

        <AnimatedDivUp>
          <h1 className="header-tittle-l ">Take a look </h1>
          <h2 className="header-h2-l col-12">
            <div className="col-8 mx-auto">
              Enjoy watching our surroundings, food & restaurant
            </div>
          </h2>
        </AnimatedDivUp>
      </div>
      <div className="section2 row col-12 mx-0 ">
        <div className="section2-inner row col-12 px-0">
          {" "}
          <Gallerycomp />
        </div>
      </div>

      <div className="parallax-container2">
        <Image
          src={masa}
          fill
          quality={60}
          className="img-m-2"
          alt="man knead dough"
          placeholder="blur"
        />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </main>
  );
}
