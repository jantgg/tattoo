"use client";
import Link from "next/link";
import Image from "next/image";
import "./reservations.css";
import pizza from "images/fondo-mesa.jpg";
import phone from "images/phone.jpg";
import masa from "images/ensaladaymesar.jpg";
import { useEffect, useState } from "react";
import AnimatedDivUp from "components/animateddiv/animateddivup.js";
import Footer from "components/footer/footer.js";
import {BsFillTelephoneOutboundFill} from 'react-icons/bs'

export default function Reservations() {
  const [isSmall, setSmall] = useState(
    typeof window !== "undefined" ? window.innerWidth < 1200 : false
  );
  const [isMobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 700 : false
  );

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

        <h1 className="header-tittle-l ">Secure your table </h1>
        <h2 className="header-h2-l col-12">
          <div className="col-12 col-sm-8 col-md-8 mx-auto">
            Reserve your Mediterranean dining experience today
          </div>
        </h2>
      </div>
      <div className="section2 row col-12 mx-0 ">
        <div className="section2-inner row col-12 px-0">
          {" "}
          {isMobile ? null : (
            <div className="col-6 relative">
              {" "}
              <Image
                src={phone}
                fill
                quality={100}
                className="card1 mx-auto"
                alt="puerto banus image"
              />
            </div>
          )}
          <div className="col-12 col-sm-6 col-md-6 flex-column section2-bg">
            {" "}
            <AnimatedDivUp>
              <h1 className="col-12 mt-3">Reserve now </h1>
            </AnimatedDivUp>
            <AnimatedDivUp>
              {" "}
              <p className="lato">
                Indulge in the anticipation of an exquisite culinary voyage with
                us. To <strong>ensure your seamless experience</strong>, we
                recommend reserving your table in advance. Our attentive staff
                is eager to assist you in arranging a{" "}
                <strong>memorable meal by the sea</strong>.
              </p>{" "}
            </AnimatedDivUp>
            <AnimatedDivUp>
              {" "}
              <div className="">
                {" "}
                <a
                  href="tel:+34777559900"
                  target="_blank"
                  className="button mx-auto mb-5"
                >+34 777 55 99 00 &nbsp;
                    <BsFillTelephoneOutboundFill />
                </a>
              </div>
            </AnimatedDivUp>
          </div>
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
    <Footer/>
      </div>
    </main>
  );
}
