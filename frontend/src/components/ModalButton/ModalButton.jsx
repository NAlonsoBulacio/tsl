import React, { useEffect, useState } from "react";
import "./ModalButton.css";

const ModalButton = ({ dataUser }) => {
  const [showButton, setShowButton] = useState(false);
  const [wppCode, setWppCode] = useState("");
  useEffect(() => {
      // Generar un código aleatorio de 6 dígitos cuando se monta el componente
      const generateCode = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
      };
  
      setWppCode(generateCode());

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > 0.3 * windowHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 100,
  //     behavior: "smooth", // Desplazamiento suave
  //   });
  // };
  const wppMessage = `Hola! Vi la Masterclass.. Quiero reclamar mi cupo gratuito para el Grupo VIP con el código: “${wppCode}”`;
  const wppUrl = `https://wa.me/${dataUser.wppNumber}?text=${encodeURIComponent(wppMessage)}`;

  const handleWppButton =  () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "MetaCompleteRegristrationEvent",
      eventCategory: "CompleteRegistration",
      eventAction: "Submit",
     
      externalID: localStorage.getItem('externalID'),
      
    });
    window.location.href = wppUrl;
  }
  return (
    <button

      onClick={handleWppButton} // Llama a la función que desplaza la página hacia arriba
      className={`bg-gray-900 fixed-button w-full lg:w-full animated-button text-xl border-[1px] border-[#dc9c35] ${
        showButton ? "show" : ""
      }`}
    >
      <span className="text-2xl uppercase">reservá tu cupo</span>
      <span className="subtext text-xs lg:text-lg text-balance">
        Y comienza a implementar este nuevo modelo de negocio ahora
      </span>
    </button>
  );
};

export default ModalButton;
