"use client";
import React, { useEffect, useState, useRef } from "react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./reviews.css";
import "bootstrap/dist/css/bootstrap.css";
import Flickity from "flickity";
import "flickity/css/flickity.css";

const reviews = [
  {
    id: 1,
    name: "Juan",
    review:
      "Recientemente me hice un tatuaje blackwork con Sebastián, y quedé absolutamente impresionada con su detalle y precisión. Definitivamente recomiendo este estudio a cualquiera que busque calidad y profesionalismo.",
  },
  {
    id: 2,
    name: "María",
    review:
      "Visité el estudio por recomendación de un amigo y no me decepcionó. María tiene un talento increíble en tatuajes tradicionales. ¡Mi tatuaje se ve vibrante y nítido, justo lo que quería!",
  },
  {
    id: 3,
    name: "Camila",
    review:
      "¡Qué experiencia tan maravillosa! José realmente se tomó el tiempo para entender lo que quería y el resultado fue mejor de lo que imaginaba. ¡Volveré seguro!",
  },
  {
    id: 4,
    name: "Luis",
    review:
      "Sebastián hizo un trabajo excepcional con mi tatuaje en blackwork. Cada línea es perfecta. Este estudio ha ganado un cliente de por vida.",
  },
  {
    id: 5,
    name: "Valentina",
    review:
      "Me hice un tatuaje tradicional con María y quedé asombrada con su habilidad y atención al detalle. Además, el ambiente del estudio es tan acogedor y profesional. ¡Sin duda regresaré para más!",
  },
  {
    id: 6,
    name: "Rodrigo",
    review:
      "Este estudio tiene un talento verdaderamente excepcional. José capturó exactamente lo que tenía en mente y lo trajo a la vida en mi piel. No puedo dejar de mirar mi tatuaje, ¡estoy tan contento!",
  },
  {
    id: 7,
    name: "Javier",
    review:
      "Después de investigar varios lugares, me decidí por este estudio y no me arrepiento en absoluto. Sebastián fue meticuloso y cuidadoso, y el resultado es una obra de arte. ¡Gracias por este increíble tatuaje en blackwork!",
  },
  // ... Añade más reseñas según lo necesites
];

export default function Reviews() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const flickityInstance = new Flickity(carouselRef.current, {
      // Opciones de Flickity (puedes personalizar esto según tus preferencias)
      cellAlign: "left",
      contain: true,
      prevNextButtons: false,
      pageDots: true,
    });

    return () => flickityInstance.destroy(); // Limpiar en desmonte
  }, []);

  return (

    <div className="carousel" ref={carouselRef}>
      {reviews.map((review) => (
        <div key={review.id} className="carousel-cell">
          <p className="parrafo-r gabarito">"{review.review}"</p>
          <h4 className="firma-r allura">- {review.name}</h4>
        </div>
      ))}
    </div>


  );
}
