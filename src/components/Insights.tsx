import { useState } from "react";
import Greentick from "../../public/icons/Greentick.tsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import Card1 from '../../public/insights/card1.svg'
import Card2 from '../../public/insights/card2.svg'

const dataMonth = [
  { name: "Jan", value: 100000 },
  { name: "Feb", value: 40000 },
  { name: "Mar", value: 95000 },
  { name: "Apr", value: 50000 },
  { name: "May", value: 85000 },
  { name: "Jun", value: 45000 },
  { name: "Jul", value: 70000 },
  { name: "Aug", value: 12056 },
  { name: "Sep", value: 60000 },
  { name: "Oct", value: 80000 },
  { name: "Nov", value: 70000 },
  { name: "Dec", value: 65000 },
];

const dataWeek = [
  { name: "Mon", value: 12000 },
  { name: "Tue", value: 8000 },
  { name: "Wed", value: 16000 },
  { name: "Thu", value: 10000 },
  { name: "Fri", value: 20000 },
  { name: "Sat", value: 15000 },
  { name: "Sun", value: 12000 },
];

const dataDay = [
  { name: "1 AM", value: 2000 },
  { name: "4 AM", value: 4000 },
  { name: "7 AM", value: 3500 },
  { name: "10 AM", value: 6000 },
  { name: "1 PM", value: 7000 },
  { name: "4 PM", value: 5000 },
  { name: "7 PM", value: 3000 },
  { name: "10 PM", value: 4000 },
];

const Insights = () => {
  const [timeframe, setTimeframe] = useState("month");

  let chartData = dataMonth;
  if (timeframe === "week") chartData = dataWeek;
  if (timeframe === "day") chartData = dataDay;

  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-6xl font-bold text-gray-900 mb-6">
              Get in-depth insights on your cashflow.
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Find your spending habits and track where you are versus your
              spending goals and see where you can save money in the short term.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Greentick />
                <span className="text-gray-700">
                  Financial transaction become easier
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Greentick />
                <span className="text-gray-700">
                  Financial transaction become easier
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Greentick />
                <span className="text-gray-700">
                  Financial transaction become easier
                </span>
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <img
                  src={Card1}
                  alt="Insights card 1"
                  className="w-full md:w-1/2 object-contain"
                />
                <img
                  src={Card2}
                  alt="Insights card 2"
                  className="w-full md:w-1/2 object-contain"
                />
              </div>
              <div className="w-full max-w-3xl p-6 bg-white rounded-3xl shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-lg">Expenses</h2>
                  <select
                    value={timeframe}
                    onChange={(e) => setTimeframe(e.target.value)}
                    className="text-sm px-2 py-1 rounded-md border"
                  >
                    <option value="month">Last Month</option>
                    <option value="week">Last Week</option>
                    <option value="day">Last 24h</option>
                  </select>
                </div>

                <div className="w-full h-64">
                  <ResponsiveContainer>
                    <LineChart
                      data={chartData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="orangeGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#f97316"
                            stopOpacity={0.6}
                          />
                          <stop
                            offset="100%"
                            stopColor="#f97316"
                            stopOpacity={0}
                          />
                        </linearGradient>
                        <filter id="shadow" height="130%">
                          <feDropShadow
                            dx="0"
                            dy="3"
                            stdDeviation="4"
                            floodColor="#f97316"
                            floodOpacity="0.4"
                          />
                        </filter>
                      </defs>

                      <CartesianGrid vertical={false} strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip
                        formatter={(value) => `$${value.toLocaleString()}.00`}
                        contentStyle={{
                          backgroundColor: "#0f172a",
                          color: "#fff",
                          borderRadius: "8px",
                          border: "none",
                        }}
                        cursor={{ stroke: "#94a3b8", strokeDasharray: "3 3" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#f97316"
                        strokeWidth={3}
                        dot={false}
                        activeDot={{ r: 8 }}
                        filter="url(#shadow)"
                        fill="url(#orangeGradient)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
