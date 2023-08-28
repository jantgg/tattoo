"use client";
import Image from "next/image";
import pizza from "images/fondopizza.jpg";
import madera from "images/madera.jpg";
import masa from "images/masa.jpg";
import ensaladatop from "images/ensalada-top.jpg";
import "./page.css";
import Slider from "components/slider/slider";
import AnimatedDivUp from "components/animateddiv/animateddivup.js";
import Footer from "components/footer/footer.js";

export default function Home() {

  const isMobile = window.innerWidth < 700;

  return (
    <main className="wrapper">
      <div id="header" className="header flex-column">
        <Image
          src={pizza}
          fill
          quality={100}
          className="header-img"
          alt="marmoled background"
          loading="eager"
          placeholder="blur"
          priority={true}
        />
        <h1 className={` header-tittle`}>Da Paolo </h1>
        <h2 className="header-h2 col-10"> Restaurant - Pizzeria</h2>
      </div>
      <div className="section2 row col-12 mx-0 ">
        <div className="section2-inner row col-12 px-0">
          {" "}
          <div className=" col-12 col-sm-6 col-md-6  relative s2-container-img">
            {" "}
            <Image
              src={ensaladatop}
              fill
              quality={100}
              className="card1 mx-auto"
              alt="puerto banus image"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-6  flex-column section2-bg">
            {" "}
            <AnimatedDivUp>
              <h1 className="col-12">
                Discover the true mediterranean cuisine{" "}
              </h1>
            </AnimatedDivUp>
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
          src={madera}
          fill
          sizes="100vw"
          quality={100}
          className="interlude-img"
          alt="puerto banus image"
        />
        {isMobile ? null : (
          <AnimatedDivUp>
            {" "}
            <h1 className="interlude-tittle ">
            &quot;From our kitchen to your table: An exquisite compilation of
              classic mediterranean cuisine&quot; <br></br> - The Chef{" "}
            </h1>
          </AnimatedDivUp>
        )}
      </div>
      <div className="section3 col-12 row px-0 mx-0">
        <Slider />
      </div>
      <div className="parallax-container2">
        <Image
          src={masa}
          fill
          quality={100}
          className="interlude2-img"
          alt="man knead dough"
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
