"use client";
import Image from "next/image";
import pizza from "images/pizzamaster.jpg";
import madera from "images/ensaladaymesar.jpg";
import pizza2 from "images/boniato.jpg";
import masa from "images/masa.jpg";
import ensaladatop from "images/arroz.jpg";
import "./page.css";
import Slider from "components/slider/slider";
import AnimatedDivUp from "components/animateddiv/animateddivup.js";
import AnimatedDivRight from "components/animateddiv/animateddivright.js";
import Footer from "components/footer/footer.js";
import { useState, useEffect } from "react";

export default function Home() {
  const [isSmall, setIsSmall] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSmall(window.innerWidth <= 1200);
      setIsMobile(window.innerWidth <= 700);
    }
  }, []);

  return (
    <main className="wrapper">
      <div id="header" className="header flex-column">
        <Image
          src={pizza}
          fill
          quality={70}
          className="header-img"
          alt="marmoled background"
          loading="eager"
          placeholder="blur"
          priority={true}
        />
           <AnimatedDivUp>
           <h1 className={` header-tittle`}>da Paolo </h1>
        <h2 className="header-h2 "> Restaurant - Pizzeria</h2>
            </AnimatedDivUp>
   
      </div>
      <div className="section2 row col-12 mx-0 ">
        <div className="section2-inner row col-12 px-0">
          {" "}
          <div className=" col-12 col-sm-6 col-md-6  relative s2-container-img">
            {" "}
            <Image
              src={ensaladatop}
              fill
              quality={60}
              className="card1 mx-auto"
              alt="puerto banus image"
              placeholder="blur"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-6  flex-column section2-bg">
            {" "}
            <AnimatedDivRight>
              <h1 className="">Discover the true mediterranean cuisine </h1>
            </AnimatedDivRight>
            <AnimatedDivUp>
              {" "}
              <p className="lato">
                Our menu is a tribute to the rich{" "}
                <strong>culinary heritage</strong> of the Mediterranean region.
                Each dish is carefully crafted with{" "}
                <strong>handpicked ingredients</strong> that accentuate the
                natural and vibrant flavors of the area. From exquisite{" "}
                <strong>fresh</strong> salads to <strong>flavorful</strong> main
                courses, each bite will transport you to sunny shores and sea
                breezes.
              </p>{" "}
            </AnimatedDivUp>
            <AnimatedDivUp>
              {" "}
              <div className="">
                {" "}
                <a href="/menu" className="button mx-auto">
                  See our menu &#x27A1;
                </a>
              </div>
            </AnimatedDivUp>
          </div>
        </div>
      </div>
      <div className="parallax-container">
        <Image
          src={pizza2}
          fill
          sizes="100vw"
          quality={60}
          className="interlude-img"
          alt="puerto banus image"
          placeholder="blur"
        />
        {isMobile ? null : (
          <>
            <Image
              src={madera}
              fill
              sizes="100vw"
              quality={60}
              className="interlude-img"
              alt="puerto banus image"
              placeholder="blur"
            />
            <AnimatedDivUp>
              {" "}
              <h1 className="interlude-tittle merri">
                &quot;From our kitchen to your table: An exquisite compilation
                of classic mediterranean cuisine&quot; <span>-The Chef </span>
              </h1>
            </AnimatedDivUp>
          </>
        )}
      </div>
      <div className="section3 col-12 row px-0 mx-0">
        <Slider />
      </div>
      <div className="parallax-container2">
        <Image
          src={masa}
          fill
          quality={60}
          className="interlude2-img"
          alt="man knead dough"
          placeholder="blur"
        />
        <div className="col-12 flex-cloumn">
          {" "}
          {isMobile ? null : (
            <AnimatedDivUp>
              {" "}
              <h1 className="interlude-tittle-2">
                Indulge in a culinary experience like no other
              </h1>
            </AnimatedDivUp>
          )}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </main>
  );
}
