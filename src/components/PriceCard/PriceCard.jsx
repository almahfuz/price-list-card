import React from "react";
import Feature from "../Features/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-indigo-500 mt-4 rounded-xl p-4 flex flex-col ">
      <h2 className="text-center">
        <span className="text-purple-600 text-white text-4xl font-extrabold">
          {price.price}
        </span>
        <span className="text-2xl">/month</span>
      </h2>
      <h5 className="text-2xl my-5 font-bold text-center"> {price.name}</h5>
      <p className="font-bold text-white"> Feature :</p>
      {price.features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
       <button className="w-full mt-auto bg-green-400 hover:bg-green-600 py-2 rounded-md text-white font-bold">Buy Now</button>
    </div>
  );
};

export default PriceCard;
