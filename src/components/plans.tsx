type Props = {};

function Plans({}: Props) {
  return (
    <section className="flex justify-evenly bg-gray-200 border-yellow-600 border-4 rounded-3xl w-3/4 h-1/2 overflow-hidden drop-shadow-lg m-auto p-10">
      <div className="w-[250px] bg-white rounded-lg shadow-md p-6">
        <h2 className="text-blue-800 text-2xl font-bold mb-4">1 Box</h2>
        <p className="text-gray-600 text-2xl font-bold mb-10">$40</p>
        <ul className="flex flex-col gap-2 text-gray-600 mb-6">
          <li>10 products</li>
          <li>Costum Message</li>
          <li>Free Delivery</li>
          <br />
        </ul>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">
          Sign up
        </button>
      </div>

      <div className="w-[250px] bg-white rounded-lg shadow-md p-6">
        <h2 className="text-green-600 text-2xl font-bold mb-4">3 Months</h2>
        <p className="text-gray-600 text-2xl font-bold">$90</p>
        <p className="text-gray-600 mb-4">$30/box</p>

        <ul className="flex flex-col gap-2 text-gray-600 mb-6">
          <li>3 boxes, 1 box per month</li>
          <li>10 products per box</li>
          <li>Costum Message</li>
          <li>Free Delivery</li>
        </ul>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">
          Sign up
        </button>
      </div>

      <div className="w-[250px] bg-white rounded-lg shadow-md p-6">
        <h2 className="text-yellow-400 text-2xl font-bold mb-4">6 Months</h2>
        <p className="text-gray-600 text-2xl font-bold">$150</p>
        <p className="text-gray-600 mb-4">$25/box</p>
        <ul className="flex flex-col gap-2 text-gray-600 mb-6">
          <li>6 boxes, 1 box per month</li>
          <li>10 products per box</li>
          <li>Costum Message</li>
          <li>Free Delivery</li>
        </ul>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">
          Sign up
        </button>
      </div>
    </section>
  );
}

export default Plans;
