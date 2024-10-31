import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const videos = [
  "https://fast.wistia.net/embed/iframe/cc8e9klrjb",
  "https://fast.wistia.net/embed/iframe/4ygnvjosj9",
  "https://fast.wistia.net/embed/iframe/40j6vrstx2",
  "https://fast.wistia.net/embed/iframe/w9gr63dilk",
  "https://fast.wistia.net/embed/iframe/01odkd1bam",
];

const InstagramSection = () => {
  // Custom Next Arrow
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 right-2 lg:-right-10 transform -translate-y-1/2 z-50 cursor-pointer text-white bg-[#00314b] p-2 rounded-full "
        onClick={onClick}
      >
        <IoIosArrowForward size={30} />
      </div>
    );
  };

  // Custom Prev Arrow
  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 left-2 lg:-left-10 transform -translate-y-1/2 z-10 cursor-pointer text-gray-200 bg-[#00314b] p-2 rounded-full"
        onClick={onClick}
      >
        <IoIosArrowBack size={30} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <NextArrow />, // Añadir el botón de Next personalizado
    prevArrow: <PrevArrow />, // Añadir el botón de Prev personalizado
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div id="community" className="w-full py-10 lg:py-20 px-2">
      <div className="mb-4">
        <h1 className="lato-black text-gray-200 text-xl lg:text-4xl text-balance uppercase">
        Historias de éxito en <span className="text-[#289ff0]">TSL</span>{" "}
         
        </h1>
      </div>
      <div className="max-w-7xl mx-auto text-center ">
        <Slider {...settings} className="w-full flex justify-center">
          {videos.map((video, index) => (
            <div
              key={index}
              className="px-0 lg:px-4 h-[480px] !flex justify-center"
            >
              <iframe
                className="rounded-lg w-auto h-full"
                src={video}
                title={`Wistia Video ${index + 1}`}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default InstagramSection;
