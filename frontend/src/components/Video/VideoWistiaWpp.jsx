import React, { useState, useRef, useEffect } from "react";
import RegistroPhone from "../Registro/RegistroPhone";
import { useLocation } from "react-router-dom";
import AnimatedButtonWpp from "../AnimatedButton/AnimatedButtonWpp";
import "./Video.css";

const VideoWistiaWpp = ({ dataUser }) => {
  const [showForm, setShowForm] = useState(false);
  const [formUrl, setFormUrl] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [wppCode, setWppCode] = useState("");
  const [randomMessage, setRandomMessage] = useState("");

  const location = useLocation();
  const isRegistered = new URLSearchParams(location.search).get("registered") === "true";
  const videoRef = useRef(null);

  const videoUrl = "https://fast.wistia.net/embed/iframe/m9ru0a3zgv";

  const messages = [
    "Hola! Vi la Masterclass.. Quiero reclamar mi cupo gratuito para el Grupo VIP con el código: “{code}”.",
    "Hola! Estuve viendo la Masterclass y quiero unirme al Grupo VIP. Mi código es: “{code}”.",
    "¡Hola! Me interesa reclamar mi cupo al Grupo VIP. Código: “{code}”.",
    "¡Hola! Asistí a la Masterclass y quiero acceder al Grupo VIP. Mi código es: “{code}”.",
    "Hola, ¿cómo están? Vi la Masterclass y quiero unirme al Grupo VIP. Código: “{code}”.",
    "Hola! Reclamo mi lugar en el Grupo VIP después de ver la Masterclass. Código: “{code}”.",
    "¡Hola! Quiero acceder al Grupo VIP tras la Masterclass. Código: “{code}”.",
    "Hola! Vi la Masterclass y me interesa el Grupo VIP. Código: “{code}”.",
    "Hola, vi la Masterclass y quiero unirme al Grupo VIP. Código: “{code}”.",
    "¡Hola! Me interesa formar parte del Grupo VIP tras la Masterclass. Código: “{code}”.",
    "Hola! Quiero asegurar mi cupo en el Grupo VIP. Código: “{code}”.",
    "Hola, ¡me interesa el Grupo VIP después de la Masterclass! Mi código es: “{code}”.",
    "Hola! Reclamo mi cupo en el Grupo VIP. Código: “{code}”.",
    "Hola, ¿cómo están? Quiero acceder al Grupo VIP tras ver la Masterclass. Código: “{code}”.",
    "¡Hola! Me interesa el Grupo VIP. Código: “{code}”.",
    "Hola! Estoy interesado en el Grupo VIP. Código: “{code}”.",
    "¡Hola! Quiero unirme al Grupo VIP. Código: “{code}”.",
    "Hola, reclamo mi lugar en el Grupo VIP. Código: “{code}”.",
    "Hola! Me interesa el Grupo VIP que mencionaron en la Masterclass. Código: “{code}”.",
    "¡Hola! Vi la Masterclass y quiero reclamar mi cupo en el Grupo VIP. Código: “{code}”."
  ];

  useEffect(() => {
    const generateCode = () => {
      return Math.floor(100000 + Math.random() * 900000).toString();
    };

    const getRandomMessage = () => {
      return messages[Math.floor(Math.random() * messages.length)];
    };

    setWppCode(generateCode());
    setRandomMessage(getRandomMessage());

    if (videoRef.current) {
      const command = isRegistered ? "unMute" : "mute";
      videoRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: command, args: [] }),
        "*"
      );
      videoRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: [] }),
        "*"
      );

      const timer1 = setTimeout(() => {
        setShowButton(true);
      }, 1000);

      return () => {
        clearTimeout(timer1);
      };
    }
  }, [isRegistered]);

  const wppMessage = randomMessage.replace("{code}", wppCode);
  const wppUrl = `https://wa.me/${dataUser.wppNumber}?text=${encodeURIComponent(wppMessage)}`;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pb-4">
      <div className="w-full lg:w-2/3 h-full flex flex-col items-center px-1 lg:px-6 py-1 lg:py-4 bg-gray-800 rounded-2xl mb-4 border-gray-800 border-2 relative">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            ref={videoRef}
            className="w-full h-full rounded-lg shadow-lg"
            src={videoUrl}
            allow="autoplay"
            frameBorder="0"
            title="Wistia Video"
          ></iframe>
        </div>
      </div>
      <div className="w-full flex justify-center px-2">
        {showButton && <AnimatedButtonWpp wppUrl={wppUrl} />}
      </div>
    </div>
  );
};

export default VideoWistiaWpp;
