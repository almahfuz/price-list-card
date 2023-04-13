import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PhoneBar = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedData = data.data.data;
        // console.log(loadedData)
        const phoneData = loadedData.map((phone) => {
          const parts = phone.slug.split("-");
          const price = parseInt(parts[1]);
          const phoneInfoPrice = {
            name: phone.phone_name,
            price: price,
          };
          return phoneInfoPrice;
        });
        // console.log(phoneData);
        setPhones(phoneData);
      });
  }, []);
  return (
    <div className="ps-3">
      <h4 className="mt-5 p-4 mx-5 ps-2">This is phones price and models</h4>
      <BarChart width={800} height={200} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis dataKey="price" />
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default PhoneBar;
