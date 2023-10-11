"use client";
import React, { useEffect, useState, useRef } from "react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="description col-3">
        <h2>Inkredible</h2>
        <p>
        Inkredible es un estudio artístico de tatuajes y piercing en Marbella
          , Málaga. Miembros de la Unión Nacional de Tatutadores y
          Anilladores Profesionales desde hace 10 años.
        </p>
      </div>
      <div className="contacts col-3">
        <h2>Contacto</h2>
        <div><a href="https://maps.app.goo.gl/J9cLdj9B1QsdjwkB7" target="_blank">Calle Marbella, Malaga</a></div>
        <div><a   href="tel:+34666666666"
                  target="_blank">+34 666 66 66 66</a></div>
        <div><a href="mailto:inkredible@email.es">inkredible@email.es</a></div>
      </div>
      <div className="socialmedia col-3">
        <h2>Siguenos en</h2>
        <p></p>
      </div>
    </div>
  );
}
