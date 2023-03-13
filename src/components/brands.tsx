import React, { useState, useEffect } from "react";

type Props = {};

const images = [
  {
    name: "image1",
    url: "/src/assets/logo_day2.png",
  },
  {
    name: "image2",
    url: "/src/assets/logo_aveeno.png",
  },
  {
    name: "image3",
    url: "/src/assets/logo_barnangen.png",
  },
  {
    name: "image4",
    url: "/src/assets/logo_Dermatologique.png",
  },
  {
    name: "image5",
    url: "/src/assets/logo_diadermine.png",
  },
  {
    name: "image6",
    url: "/src/assets/logo_Dodot.png",
  },
  {
    name: "image7",
    url: "/src/assets/logo_Kellogg.png",
  },
  {
    name: "image8",
    url: "/src/assets/logo_lactacyd.png",
  },
];

function Brands({}: Props) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       setCurrentSlide((prev) => (prev + 1) % images.length);
  //     }, 2000);

  //     return () => clearInterval(intervalId);
  //   }, [images.length]);

  const prevSlide = () => {
    //   setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    //   setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  //   const visibleSlides = images.slice(currentSlide, currentSlide + 6);

  return (
    <section className=" flex justify-evenly w-5/6 text-center p-10 border-y-4 border-blue-900 border-dashed m-auto">
      <h2 className="font-bold text-3xl  text-amber-900 tracking-wide">
        Our Brands:
      </h2>

      <div className="slider">
        <div className="slider__wrapper">
          <div
            className="slider__container flex gap-10"
            style={{
              width: `${images.length * 100}%`,
              transform: `translateX(-${
                currentSlide * (100 / images.length)
              }%)`,
            }}
          >
            {images.map(({ url }, id) => {
              return (
                <div
                  key={id}
                  className="bg-contain bg-no-repeat bg-center w-[200px] h-[50px]"
                  style={{ backgroundImage: `url("${url}")` }}
                ></div>
              );
            })}
          </div>
        </div>
        <button className="slider__prev" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="slider__next" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </section>
  );
}

export default Brands;
