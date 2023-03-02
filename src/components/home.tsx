import HeroImg from "@/assets/hero_img.png";
import Dino2 from "@/assets/dino2.png";
import Button from "./button";

type Props = {};

function Home({}: Props) {
  return (
    <section className="flex justify-around gap-8 mt-[200px] bg-gray-200 border-yellow-600 border-4 rounded-3xl w-[70%] overflow-hidden drop-shadow-lg p-6 m-auto">
      <div className="flex flex-col  justify-center gap-4 ">
        <img src={HeroImg} alt="baby box logo" />
        <h2 className="font-bold text-3xl text-green-500">Unboxing joy!</h2>
        <p>
          Help new mothers discover new and useful products to help them
          navigate their pregnancy and motherhood journey with our monthly
          boxes.
        </p>
        <div>
          <Button text="Learn more" />
        </div>
      </div>
      <div>
        <img src={Dino2} alt="a baby dinosaurs" width="600px" />
      </div>
    </section>
  );
}

export default Home;
