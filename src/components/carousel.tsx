import { useEffect, useState } from "react";
// Shorthand for importing all logos
import logo1 from "/src/assets/logos/logo1.png";
import logo2 from "/src/assets/logos/logo2.png";
import logo3 from "/src/assets/logos/logo3.png";
import logo4 from "/src/assets/logos/logo4.png";
import logo5 from "/src/assets/logos/logo5.png";
import logo6 from "/src/assets/logos/logo6.png";
import logo7 from "/src/assets/logos/logo7.png";
import logo8 from "/src/assets/logos/logo8.png";
import logo9 from "/src/assets/logos/logo9.png";
import logo10 from "/src/assets/logos/logo10.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [items, setItems] = useState<string[]>([
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === items.length - 1 ? 0 : currentIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [items.length]);

  const visibleItems = items.slice(currentIndex, currentIndex + 5);

  return (
    <section className="flex justify-evenly shrink-0  items-center gap-10 w-full h-[200px] overflow-hidden">
      {visibleItems.map((_, index) => (
        <img key={index} src={_} alt={`Logo ${index}`} className=" h-10" />
      ))}
    </section>
  );
};

export default Carousel;
