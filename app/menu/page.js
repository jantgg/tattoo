"use client";
import Link from "next/link";
import Image from "next/image";
import "./menu.css";
import pizza from "images/tabla.jpg";
import masa from "images/masa.jpg";
import { useEffect, useState } from "react";

export default function Menu() {
  const [currentCard, setCurrentCard] = useState(null);

  const handleCard = (e) => {
    const cardId = e.currentTarget.id; // Usa currentTarget en lugar de target
    setCurrentCard(cardId);
  };

  useEffect(() => {
    const container = document.querySelector(".card-container");
    const handleClick = (e) => {
      if (e.target.classList.contains("card-m")) {
        handleCard(e);
      }
    };
    container.addEventListener("click", handleClick);
    return () => {
      container.removeEventListener("click", handleClick);
    };
  }, []); // Agrega una dependencia vacía para asegurar que el efecto se ejecute solo una vez

  const getCardClassName = (cardId) => {
    let cardSpecificClass = "";
  
    if (cardId === "card1") {
      cardSpecificClass = "card1-m";
    } else if (cardId === "card2") {
      cardSpecificClass = "card2-m";
    } else if (cardId === "card3") {
      cardSpecificClass = "card3-m";
    } else if (cardId === "card4") {
      cardSpecificClass = "card4-m";
    }
  
    if (currentCard === cardId) {
      return `card-m card-m-active row ${cardSpecificClass}`;
    } else if (currentCard === null) {
      return `card-m px-0 d-flex ${cardSpecificClass}`;
    } else {
      return `card-m card-m-disabled ${cardSpecificClass}`;
    }
  };

  useEffect(() => {
    const mainElement = document.querySelector("main");
    const handleScroll = () => {};
    mainElement.addEventListener("scroll", handleScroll);
    return () => {
      mainElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="wrapper-m">
      <div id="header" className="header-m flex-column">
        <Image
          src={pizza}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="header-img-m"
          alt="marmoled background"
          loading="eager"
          placeholder="blur"
          priority={true}
        />

        <h1 className="header-tittle-m ">Discover our menu </h1>
        <h2 className="header-h2-m col-12">
          <div className="col-8 mx-auto">
            We invite you to explore our diverse menu and immerse yourself in an
            unforgettable culinary experience.
          </div>
         
        </h2>
      </div>
      <div
        className={`section2-m row col-12 mx-0 card-container ${
          currentCard !== null ? "goblack" : "gored"
        }`}
      >
        <div
          className={getCardClassName("card1")}
          id="card1"
          onClick={handleCard}
        >
          <h1 className="verticalText col-2 px-0"> Breakfast</h1>
          <div className="col-9 px-0">
            <div className="cardp">
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Evita que el evento se propague hacia arriba
                  setCurrentCard(null);
                }}
                className="xbutton"
              >
                X
              </button>
              hola
            </div>
          </div>
        </div>
        <div
          className={getCardClassName("card2")}
          id="card2"
          onClick={handleCard}
        >
          <h1 className="verticalText col-2 px-0"> Dishes</h1>
          <div className="col-9 px-0">
            <p className="cardp">hola</p>
          </div>
        </div>
        <div
          className={getCardClassName("card3")}
          id="card3"
          onClick={handleCard}
        >
          <h1 className="verticalText col-2 px-0"> Pizza</h1>
          <div className="col-9 px-0">
            <p className="cardp">hola</p>
          </div>
        </div>
        <div
          className={getCardClassName("card4")}
          id="card4"
          onClick={handleCard}
        >
          <h1 className="verticalText col-2 px-0"> Cocktail</h1>
          <div className="col-9 px-0">
            <p className="cardp">hola</p>
          </div>
        </div>
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
      <div className="footer">
        <h2 className="interlude-text">
          "Discover a waterfront haven in Puerto Banús, where Mediterranean
          shores marries classic Mediterranean flavors with an exclusive terrace
          experience." - Chief.
        </h2>
      </div>
    </main>
  );
}
