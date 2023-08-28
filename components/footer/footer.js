"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import useScrollPosition from "app/hooks/useScrollPosition";
import pasta from "images/pasta.jpg";
import dapaolo from "images/dapaolo.jpg";
import "./footer.css";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { FaTripadvisor } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import AnimatedDivUp from "../animateddiv/animateddivup.js";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3 className="ms-2">
          Da<span>&nbsp;Paolo</span>
        </h3>

        <p className="footer-links">
          <a href="/" className="link-1 mx-2 line">
            Home
          </a>

          <a href="/menu" className="link-1 mx-2 line">
            Menu
          </a>

          <a href="/where" className="link-1 mx-2 line">
            Location
          </a>

          <a href="/reservations" className="link-1 mx-2 line">
            Reservations
          </a>

          <a href="/gallery" className="link-1 mx-2 line">
            Gallery
          </a>
        </p>

        <p className="footer-company-name ms-2 mt-5">Da Paolo © 2023</p>
      </div>

      <div className="footer-center deco-none">
        <div className="margin-links">
          <HiLocationMarker className="icons-mid-f" />
          <a
            href="https://goo.gl/maps/4aCcwVAce1JkRDgv9"
            className="deco-none"
            target="_blank"
          >
            {" "}
            <p>
              <span>29660 C. Ribera, 9</span> Puerto Banus, Marbella
            </p>
          </a>
        </div>

        <div className="margin-links">
          <BsFillTelephoneOutboundFill className="icons-mid-f" />
          <a href="tel:+34777559900" target="_blank" className="deco-none">
            {" "}
            <p>+34 777 66 55 33</p>
          </a>
        </div>

        <div className="margin-links">
          <GrMail className="icons-mid-f" />
          <p>
            <a href="mailto:support@company.com">dapaolo@dapaolo.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right mt-4">
        <p className="footer-company-about">
          <span>
            "Discover a waterfront haven in Puerto Banús, where Mediterranean
            shores marries classic Mediterranean flavors with an exclusive
            terrace experience."
          </span>{" "}
          - Chief.
        </p>

        <div className="footer-icons">
          <a href="#">
            <FaTripadvisor />
          </a>
          <a href="#">
            <AiOutlineInstagram />
          </a>
          <a href="#">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
