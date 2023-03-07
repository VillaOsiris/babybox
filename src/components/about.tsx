import dino1 from "@/assets/dino1.png";
import dino5 from "@/assets/dino5.png";
import dino7 from "@/assets/dino7.png";

type Props = {};

function About({}: Props) {
  return (
    <section className=" flex justify-evenly w-5/6 text-center p-10 border-y-4 border-blue-900 border-dashed m-auto">
      <div>
        <img
          src={dino7}
          alt="a baby dinosaur"
          width="200px"
          className="m-auto"
        />
        <h2 className="font-bold text-2xl  text-amber-900 my-2">Costumize</h2>
        <p className="w-[30ch] font-bold text-gray-800">
          Sign up and select through our range of products, creating the ideal
          BabyBox.
        </p>
      </div>
      <div>
        <img
          src={dino5}
          alt="a baby dinosaur"
          width="200px"
          className="m-auto"
        />
        <h2 className="font-bold text-2xl  text-amber-900 my-2">Pick a Plan</h2>
        <p className="w-[30ch] font-bold text-gray-800">
          Choose between our three plans, that best suits your needs.
        </p>
      </div>
      <div>
        <img
          src={dino1}
          alt="a baby dinosaur"
          width="200px"
          className="m-auto"
        />
        <h2 className="font-bold text-2xl  text-amber-900 my-2">Enjoy</h2>
        <p className="w-[30ch] font-bold text-gray-800">
          Add a costum messagem with your gift and rest assured that the box
          will be delivered wih full joy.
        </p>
      </div>
    </section>
  );
}

export default About;
