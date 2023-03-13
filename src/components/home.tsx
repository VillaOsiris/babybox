import HeroImg from "@/assets/hero_img.png";
import Dino2 from "@/assets/dino2.png";
import Button from "./button";
import useMediaQuery from "@/hooks/mediaHook";

type Props = {};

function Home({}: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <main id="home" className="py-[100px] md:h-full md:pb-0">
      <section className="flex bg-gray-200 border-yellow-600 border-4 rounded-3xl w-3/4 h-1/2 overflow-hidden drop-shadow-lg  m-auto">
        <div className="flex flex-col p-10 gap-4">
          <img src={HeroImg} alt="baby box logo" width="400px" />

          <h2 className="font-bold text-3xl text-green-500 tracking-wide">
            UNBOXING JOY!
          </h2>
          <p className="w-3/5 text-lg text-blue-900">
            Help new mothers discover new and useful products to help them
            navigate their pregnancy and motherhood journey with our monthly
            boxes.
          </p>
          <div className="flex gap-4">
            <Button text="Learn more" />
            <Button text="Subscribe" />
          </div>
        </div>
        <div>
          <img src={Dino2} alt="a baby dinosaurs" width="600px" />
        </div>
      </section>
    </main>
  );
}

export default Home;
