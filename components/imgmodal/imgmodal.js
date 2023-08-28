import React, { useState } from "react";
import Image from "next/image";
import "./imgmodal.css";

const ImageModal = ({ images, currentIndex, closeModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

  const showPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const showNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className="custom-modal myrow">

        <button onClick={showPreviousImage} className="col-1">
          Anterior
        </button>
        <Image
          className="col-10"
          src={images[currentImageIndex]}
          alt={`Imagen ${currentImageIndex}`}
        />

        <button onClick={showNextImage} className="col-1">
          Siguiente
        </button>
        <button onClick={closeModal}>Cerrar</button>

    </div>
  );
};

export default ImageModal;
