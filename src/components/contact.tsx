import dino4 from "@/assets/dino4.png";

type Props = {};

function Contact({}: Props) {
  return (
    <section
      id="contact"
      className="mx-auto w-3/4  bg-gray-200 border-yellow-600 border-4 rounded-3xl w-3/4 h-1/2 overflow-hidden drop-shadow-lg m-auto"
    >
      <header className="p-10">
        <h2 className="font-bold text-3xl text-green-500">
          NOT SURE HOW IT WORKS?
        </h2>
        <p className="text-lg text-blue-900 mt-6 tracking-wide">
          BabyBox is a subscription service that offers monthly boxes filled
          with pregnancy and baby-related products. Each box contains a
          selection of carefully curated items, such as skincare products,
          snacks, and accessories, that are tailored to the needs of expecting
          and new mothers. We offers a three subscription options, a one-time
          purchase, a monthly subscription, and a three-month subscription. With
          their subscription service, new and expectant mothers can discover new
          and useful products to help them navigate their pregnancy and
          motherhood journey. Still have doubts? Send us a message!
        </p>
      </header>
      <div className="mt-10 gap-8 md:flex">
        <form action="" className="flex w-full flex-col gap-6  px-10 pb-10">
          <input
            className="rounded-lg bg-green-300 px-5 py-3 placeholder-white"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="rounded-lg bg-green-300 px-5 py-3 placeholder-white"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="w-full rounded-lg bg-green-300 px-5 py-3 placeholder-white"
            rows={10}
            placeholder="Message"
            required
          />
        </form>
        <img
          src={dino4}
          alt="baby flying dinosaur"
          width="400px"
          height="400px"
        />
      </div>
    </section>
  );
}

export default Contact;
