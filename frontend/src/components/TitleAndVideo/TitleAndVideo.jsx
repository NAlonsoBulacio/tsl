import React from "react";
import VideoWistiaWpp from "../Video/VideoWistiaWpp";
const TitleAndVideo = ({ video, calendlyPage, data }) => {
  return (
    <div className="flex flex-wrap justify-center items-start text-center space-y-4">
      <h1 className="lato-black text-gray-200 text-xl lg:text-5xl text-balance uppercase">
        <span className="text-[#289ff0]"> Trader Argentino </span> Comparte un
        Sistema Probado que
        <span className="text-[#289ff0]">
          Cualquiera Puede Aprender y Aplicar
        </span>
      </h1>

      <p className="lato-regular-italic text-sm lg:text-lg text-gray-100">
      Con más de 2000 miembros en nuestra comunidad, ofrecemos el sistema más efectivo y probado del mercado para ayudarte a ser rentable en trading.
      </p>
      <div className="flex justify-center w-full">
        {video === "wpp" && (
          <VideoWistiaWpp dataUser={data} calendlyPageUrl={calendlyPage} />
        )}
      </div>
    </div>
  );
};

export default TitleAndVideo;
