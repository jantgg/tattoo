"use client";
import Image from "next/image";
import pizza from "images/fondopizza.jpg";
import madera from "images/madera.jpg";
import masa from "images/masa.jpg";
import "./page.css";
import Slider from "components/slider/slider";
import { useEffect, useState } from "react";



export default function Home() {
  useEffect(() => {
    const mainElement = document.querySelector("main");
    const handleScroll = () => {
      // Realiza las operaciones necesarias en respuesta al scroll dentro del main
    };
    mainElement.addEventListener("scroll", handleScroll);

    return () => {
      mainElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="wrapper">
      <div id="header" className="header flex-column">
        <Image
          src={pizza}
          layout="fill"
          objectFit="cover"
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
      <div className="section2 row col-12 mx-0">
        <div className="col-6 d-flex">
          {" "}
          <div className="col-11 card1 mx-auto"> </div>
        </div>

        <div className="col-6 flex-column section2-bg">
          {" "}
          <h1 className="col-12 mt-3">
            Discover the true mediterranean cuisine{" "}
          </h1>
          <p className="lato">
            Our menu is a tribute to the rich <strong>culinary heritage</strong>{" "}
            of the Mediterranean region. Each dish is carefully crafted with{" "}
            <strong>handpicked ingredients</strong> that accentuate the natural
            and vibrant flavors of the area. From exquisite{" "}
            <strong>fresh</strong> salads to <strong>flavorful</strong> main
            courses, each bite will transport you to sunny shores and sea
            breezes.
          </p>{" "}
          <div className="ms-5">
            {" "}
            <a href="/menu" className="button mx-auto">
              See our menu &#x27A1;
            </a>
          </div>
        </div>

        {/* <div className="col-2 decoleft"></div> */}
        {/* <div className="col-3 card1 px-0">
          <h2 className="card-tittles mx-auto">
            <Link href="/menu" className="no-deco text-black ">
              Dishes
            </Link>
          </h2>
        </div>
        <div className="col-3 card2 px-0">
          <h2 className="card-tittles mx-auto">
            {" "}
            <Link href="/menu" className="no-deco text-black">
              Pizza
            </Link>
          </h2>
        </div>
        <div className="col-3 card3 px-0">
          <h2 className="card-tittles mx-auto">
            {" "}
            <Link href="/menu" className="no-deco text-black">
              Cocktail
            </Link>
          </h2>
        </div> */}
        {/* <div className="col-2 decoright"></div> */}
      </div>
      <div className="parallax-container">
        <Image
          src={madera}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="interlude-img"
          alt="puerto banus image"
        />
        <h1 className="interlude-tittle">
          "From our kitchen to your table: An exquisite compilation of classic
          mediterranean cuisine" <br></br> - The Chef{" "}
        </h1>
      </div>
      <div className="section3 col-12">
        <Slider />
      </div>
      <div className="parallax-container2">
        <Image
          src={masa}
          layout="responsive"
          objectFit="cover"
          quality={100}
          className="interlude2-img"
          alt="man knead dough"
        />
        <div className="col-12 flex-cloumn">
          {" "}
          <h1 className="interlude-tittle-2">
            Indulge in a culinary experience like no other
          </h1>
          
        </div>
      </div>
      <div className="footer"><h2 className="interlude-text">
            "Discover a waterfront haven in Puerto Banús, where Mediterranean shores marries classic Mediterranean flavors with an exclusive
            terrace experience." - Chief.
          </h2></div>
    </main>
  );
}
