"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import useScrollPosition from "app/hooks/useScrollPosition";
import pasta from "images/pasta.jpg";
import dapaolo from "images/dapaolo.jpg";
import "./gallery.css";
import ImageModal from "../imgmodal/imgmodal";


const Gallery = () => {
  const scrollPosition = useScrollPosition();
  const images = [pasta, dapaolo, pasta]; // Agrega aquí las imágenes importadas
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div id="gallery" className="myrow col-12">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Imagen ${index}`}
          className="col-12 col-xl-2 img mx-2 my-2"
          quality={70}
          onClick={() => openModal(index)}
        />
      ))}
      {modalOpen && (
        <ImageModal
          images={images}
          currentIndex={currentImageIndex}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Gallery;




// const Gallery = () => {
//   return (
//     <div id="gallery" className="myrow  col-8">
//       <Image
//         src={pasta}
//         alt="pasta"
//         className="col-12 col-xl-2 img mx-2 my-2 "
//         quality={70}
//       />
//       <Image
//         src={pasta}
//         alt="pasta"
//         className="col-12 col-xl-2 img mx-2 my-2 "
//         quality={70}
//       />{" "}
//       <Image
//         src={pasta}
//         alt="pasta"
//         className="col-12 col-xl-2 img mx-2 my-2 "
//         quality={70}
//       />{" "}
//       <Image
//         src={pasta}
//         alt="pasta"
//         className="col-12 col-xl-2 img mx-2 my-2 "
//         quality={70}
//       />{" "}
//       <Image
//         src={pasta}
//         alt="pasta"
//         className="col-12 col-xl-2 img mx-2 my-2 "
//         quality={70}
//       />{" "}
//       <Image
//         src={pasta}
//         alt="pasta"
//         className="col-12 col-xl-2 img mx-2 my-2 "
//         quality={70}
//       />
//     </div>
//   );
// };

// export default Gallery;
