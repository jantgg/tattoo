"use client";
import Image from "next/image";
import pizza from "images/fondopizza.jpg";
import madera from "images/madera.jpg";
import masa from "images/masa.jpg";
import "./page.css";
import Slider from "components/slider/slider";
import { useEffect, useState } from "react";

export const metadata = {
  title: "Da Paolo Ristorante",
  description: "The best restaurant in Puerto Banus",
};

export default function Home() {
  useEffect(() => {
    const wrapperElement = document.querySelector(".wrapper");
    const handleScroll = () => {
      // Realiza las operaciones necesarias en respuesta al scroll dentro del wrapper
    };
    wrapperElement.addEventListener("scroll", handleScroll);

    return () => {
      wrapperElement.removeEventListener("scroll", handleScroll);
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
        />

        <h1 className={` header-tittle`}>Da Paolo </h1>
        <h2 className="header-h2 col-10"> Restaurant - Pizzeria</h2>
      </div>
      {/* <div className="section1 d-flex">
        <div className="marmol"></div>
        <div className="sub-section1 row col-12 marmol">
          {" "}
          <div className="col-1"></div>
          <div className="plato col-4"></div>
          <div className="presentation col-5">
            <h1>Da Paolo</h1>
            <h2>Traditional Mediterranean Restaurant</h2>
            <p>
              Experience the essence of the mediterranean cuisine at Da Paolo in
              Puerto Banus. Indulge in authentic flavors and locally sourced
              ingredients that capture the heart of Italian cuisine. Join us for
              an unforgettable journey celebrating Mediterranean culture.
            </p>
            <Link href="/menu" className="button">
              Our Menu
            </Link>
            <Link href="/menu" className="button ms-3">
              Reserve
            </Link>
          </div>
        </div>
      </div> */}
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
      {/* <div className="section3 flex-column col-12 pt-5">
        <div className="mid-deco col-2 mx-auto"></div>
        <h1 className="px-0 pt-4">Get to know us better</h1>
        <h2 className="second-text-3 col-7 mx-auto">
          "Discover a waterfront haven in Puerto Banús, where our Italian
          restaurant marries classic Mediterranean flavors with an exclusive
          terrace experience."
        </h2>

        <div className="col-12 row sub-section3">
          <div className="col-6 d-flex">
            {" "}
            <div className="col-6 ms-auto sub-img-1"></div>
            <div className="col-1"></div>
          </div>

          <div className="col-6">
            {" "}
            <h2 className="col-8 me-auto sub-text-h2-l ps-4">Discover us</h2>
            <p className="col-8 me-auto ps-4 pt-3 sub-text">
              Welcome to our exquisite Italian restaurant nestled in the heart
              of Puerto Banús, where the charm of Mediterranean flavors comes
              alive.<br></br> As the only establishment with this coveted
              outdoor space, we invite you to savor every bite while enjoying
              the gentle sea breeze and the rhythmic symphony of the marina.
              It's an experience that elevates dining to a new level of delight.
            </p>
          </div>
        </div>
        <div className="col-12 row sub-section3">
          <div className="col-6">
            {" "}
            <h2 className="col-8 ms-auto sub-text-h2-r ps-4">
              Time-honored classics with a modern twist
            </h2>
            <p className="col-8 ms-auto ps-4 pt-3 sub-text">
              Indulge in a curated collection of classic Mediterranean dishes
              that have been lovingly crafted by our talented chefs. Each plate
              tells a story of time-honored recipes, handed down through
              generations, and infused with a touch of modern creativity. Our
              menu is a celebration of flavors, textures, and aromas that
              transport you to the sun-drenched shores of Italy.
            </p>
          </div>
          <div className="col-6 d-flex">
            <div className="col-1"></div>

            <div className="col-6 me-auto sub-img-2"></div>
          </div>
        </div>

        <div className="col-12 row sub-section3">
          <div className="col-6 d-flex">
            {" "}
            <div className="col-6 ms-auto sub-img-3"></div>
            <div className="col-1"></div>
          </div>

          <div className="col-6">
            {" "}
            <h2 className="col-8 me-auto sub-text-h2-l ps-4">
              Inviting ambiance for every occasion
            </h2>
            <p className="col-8 me-auto ps-4 pt-3 sub-text">
              Whether you're seeking an intimate dinner for two or a joyous
              gathering with friends, our restaurant offers a warm and inviting
              atmosphere that effortlessly complements the beauty of its
              surroundings. Join us to embark on a culinary voyage that connects
              your heart to the Mediterranean soul, where every moment is a
              celebration of la dolce vita.
            </p>
          </div>
        </div>
      </div> */}
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
            "Discover a waterfront haven in Puerto Banús, where Mediterranean classics marries classic Mediterranean flavors with an exclusive
            terrace experience." - Chief.
          </h2></div>
    </main>
  );
}
