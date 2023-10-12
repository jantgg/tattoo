"use client";
import React, { useEffect, useState, useRef } from "react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.css";
import {AiOutlineInstagram} from 'react-icons/ai';
import {CiFacebook} from 'react-icons/ci';
import {BiLogoTiktok} from 'react-icons/bi';


export default function Footer() {
  return (
    <div className="footer">
      <div className="description col-3">
        <h2 className=" rocker redfont">Inkredible</h2>
        <p className="parrafo-f gabarito">
        Estudio artístico de tatuajes y piercing en Marbella
          , Málaga. Miembros de la Unión Nacional de Tatutadores y
          Anilladores Profesionales desde hace 10 años.
        </p>
      </div>
      <div className="contacts col-3">
        <h2 className=" rocker redfont">Contacto</h2>
        <a className="enlaces gabarito" href="https://maps.app.goo.gl/J9cLdj9B1QsdjwkB7" target="_blank">Calle Marbella, Malaga</a>
        <a className="enlaces gabarito"   href="tel:+34666666666"
                  target="_blank">+34 666 66 66 66</a>
        <a className="enlaces gabarito" href="mailto:inkredible@email.es">inkredible@email.es</a>
      </div>
      <div className="socialmedia col-3">
        <h2 className="col-12 rocker redfont">Siguenos en</h2>
    <a className="col-4 icons"><AiOutlineInstagram/></a>
    <a className="col-4 icons"><CiFacebook/></a>
    <a className="col-4 icons"><BiLogoTiktok/></a>
      </div>
    </div>
  );
}
