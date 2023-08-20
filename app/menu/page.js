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
    const cardId = e.target.id;
    setCurrentCard(cardId);
  };

  const getCardClassName = (cardId) => {
    if (currentCard === cardId) {
      return "card-m card-m-active";
    } else if (currentCard === null) {
      return "card-m";
    } else {
      return "card-m card-m-disabled";
    }
  };

  const handleReset = () => {
    setCurrentCard(null);
  };

  // const mycards = document.querySelectorAll(".card-m");
  // mycards.forEach(card => {
  //   card.addEventListener("click", handleCard);
  // });

  const mycards = document.querySelectorAll(".card-m");

  mycards.forEach((card) => {
    card.addEventListener("click", (e) => {
      handleCard(e);
    });
  });

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
          layout="responsive"
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
          <button
            onClick={() => {
              handleReset();
            }}
          >
            ILLOOO
          </button>
        </h2>
      </div>
      <div className="section2-m row col-12 mx-0 justify-content-between">
        <div
          className={getCardClassName("card1")}
          id="card1"
          onClick={handleCard}
        >
          Card 1
        </div>
        <div
          className={getCardClassName("card2")}
          id="card2"
          onClick={handleCard}
        >
          Card 2
        </div>
        <div
          className={getCardClassName("card3")}
          id="card3"
          onClick={handleCard}
        >
          Card 3
        </div>
        <div
          className={getCardClassName("card4")}
          id="card4"
          onClick={handleCard}
        >
          Card 4
        </div>
        <div
          className={getCardClassName("card5")}
          id="card5"
          onClick={handleCard}
        >
          Card 5
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
