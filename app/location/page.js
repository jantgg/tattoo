"use client";
import Link from "next/link";
import Image from "next/image";
import "./location.css";
import pizza from "images/tabla.jpg";
import masa from "images/masa.jpg";
import { useEffect, useState } from "react";

export default function Location() {
  useEffect(() => {
    const mainElement = document.querySelector("main");
    const handleScroll = () => {};
    mainElement.addEventListener("scroll", handleScroll);
    return () => {
      mainElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <div className="col-8 mx-auto">
        Join us by the water's edge at Puerto Banús and experience authentic Italian Mediterranean cuisine. Your table is waiting.
        </div>
      </h2>
    </div>
    <div
      className={`section2-l row col-12 mx-0 card-container gored`}
    >
   
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
      <div className="col-12 flex-cloumn">
        {" "}
        <h1 className="interlude-tittle-2">
          Indulge in a culinary experience like no other
        </h1>
      </div>
    </div>
    <div className="footer-l">
      <h2 className="interlude-text">
        "Discover a waterfront haven in Puerto Banús, where Mediterranean
        shores marries classic Mediterranean flavors with an exclusive terrace
        experience." - Chief.
      </h2>
    </div>
  </main>)}