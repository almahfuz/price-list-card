import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("price.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  return (
    <div className="mx-12">
      <h2 className=" mt-3 text-4xl text-center bg-purple-400 font-bold p-4">
        Awesome Affordable Prices
      </h2>
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-3">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>

        ))}
       
      </div>
    </div>
  );
};

export default PriceList;
