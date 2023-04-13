import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const studentsMarks = [
    { id: 1, name: "John", physics: 85, chemistry: 78, math: 92 },
    { id: 2, name: "Mary", physics: 72, chemistry: 80, math: 88 },
    { id: 3, name: "Peter", physics: 68, chemistry: 91, math: 76 },
    { id: 4, name: "Susan", physics: 90, chemistry: 82, math: 95 },
    { id: 5, name: "David", physics: 82, chemistry: 87, math: 81 },
    { id: 6, name: "Emma", physics: 76, chemistry: 72, math: 89 },
    { id: 7, name: "Mark", physics: 79, chemistry: 86, math: 83 },
    { id: 8, name: "Julia", physics: 87, chemistry: 79, math: 90 },
    { id: 9, name: "Robert", physics: 92, chemistry: 90, math: 94 },
    { id: 10, name: "Karen", physics: 84, chemistry: 85, math: 87 },
    { id: 11, name: "Lucy", physics: 76, chemistry: 81, math: 79 },
    { id: 12, name: "Michael", physics: 91, chemistry: 88, math: 92 },
  ];
  return <div>
    <p className="mt-5 p-4 mx-5"> This is student marks chat Dashboard, here is Dashboard</p>

<LineChart
      width={800}
      height={300}
      data={studentsMarks}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="physics"
        stroke="#8884d8"
      />
      <Line type="monotone" dataKey="chemistry" stroke="#82ca9d" />
      <Line type="monotone" dataKey="math" stroke="#A52A2A" />
    </LineChart>
  </div>;
};

export default Dashboard;
