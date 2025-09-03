import Figma from "../../public/figma";
import Spotify from "../../public/spotify.tsx";
import Airbnb from "../../public/Airbnb.tsx";
import Dollar from "../../public/icons/dollar.tsx";
import Coin from "../../public/icons/coin.tsx";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useState } from "react";

const Features = () => {
  const [timeframe, setTimeframe] = useState("month");


  const dataMonth = [
    { name: "Investment", value: 40 },
    { name: "Food & Drink", value: 28 },
    { name: "Shopping", value: 32 },
  ];

  const dataWeek = [
    { name: "Investment", value: 25 },
    { name: "Food & Drink", value: 45 },
    { name: "Shopping", value: 30 },
  ];

  const dataDay = [
    { name: "Investment", value: 50 },
    { name: "Food & Drink", value: 20 },
    { name: "Shopping", value: 30 },
  ];

  let data = dataMonth;
  if (timeframe === "week") data = dataWeek;
  if (timeframe === "day") data = dataDay;

  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl  text-gray-900 mb-4">
              App features that help manage <br /> money more organized
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col justify-between text-center bg-gray-300 rounded-4xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Facilitate Financial <br /> Services
              </h2>
              <p className="text-gray-600 mb-8">
                Consequat curae neque amet auctor, sed fames sem tristique,
                nullam nisi maecenas.
              </p>
              <div className=" bg-white h-[395px] rounded-2xl p-6  shadow-lg">
                <h4 className="font-semibold ">Payments</h4>
                <p>20 febuary 2022</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-gray-100 rounded-xl p-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-black p-3 rounded-xl">
                        <Figma />
                      </div>
                      <div>
                        <p className="font-medium">Figma</p>
                        <p className="text-sm text-gray-500">Subscribe</p>
                      </div>
                    </div>
                    <p className="font-semibold text-lg">-$45</p>
                  </div>

                  <div className="flex items-center justify-between bg-gray-100 rounded-xl p-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-black p-3 rounded-xl">
                        <Spotify />
                      </div>
                      <div>
                        <p className="font-medium">Spotify</p>
                        <p className="text-sm text-gray-500">Subscribe</p>
                      </div>
                    </div>
                    <p className="font-semibold text-lg">-$8</p>
                  </div>

                  <div className="flex items-center justify-between bg-gray-100 rounded-xl p-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-black p-3 rounded-xl">
                        <Airbnb />
                      </div>
                      <div>
                        <p className="font-medium">Airbnb</p>
                        <p className="text-sm text-gray-500">Rent room</p>
                      </div>
                    </div>
                    <p className="font-semibold text-lg">-$64</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center bg-gray-300 rounded-4xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Facilitate as an Alternative <br /> Investment Tool
              </h2>
              <p className="text-gray-600 mb-8">
                Consequat curae neque amet auctor, sed fames sem tristique,
                nullam nisi maecenas.
              </p>
              <div className="bg-white h-[395px] rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold ">My Saving</h4>
                <p>20 febuary 2022</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-gray-100 rounded-xl p-3">
                    <div className="flex items-center space-x-3 w-full">
                      <div className="flex bg-orange-500 h-20 p-3 justify-center items-center rounded-xl">
                        <Dollar />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium mr-30">Investment</p>
                        <p className="font-bold text-lg mr-30">$2,500.02</p>
                        <div className="w-full bg-gray-300 rounded-full h-2 my-1">
                          <div className="bg-black h-2 rounded-full w-1/2"></div>
                        </div>
                        <p className="text-sm text-gray-500 mr-15">
                          2 months income 50%
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-gray-100 rounded-xl p-3">
                    <div className="flex items-center space-x-3 w-full">
                      <div className="flex bg-black h-20 p-3 justify-center items-center rounded-xl">
                        <Coin />
                      </div>

                      <div className="flex-1">
                        <p className="font-medium mr-20">Mutualan funds</p>
                        <p className="font-bold text-lg mr-27">$2,830.00</p>
                        <div className="w-full bg-gray-300 rounded-full h-2 my-1">
                          <div className="bg-black h-2 rounded-full w-[70%]"></div>
                        </div>
                        <p className="text-sm text-gray-500 mr-18">
                          Income 1 year 70%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center bg-gray-300 rounded-4xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Financial Transactions <br /> Becomes Easier
              </h2>
              <p className="text-gray-600 mb-8">
                Consequat curae neque amet auctor, sed fames sem tristique,
                nullam nisi maecenas.
              </p>
              <div className="bg-white h-[395px] rounded-2xl p-6 shadow-lg">
                

                <div className="p-4 w-full max-w-sm">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="font-semibold text-lg">Statistic</h2>
                    <select
                      value={timeframe}
                      onChange={(e) => setTimeframe(e.target.value)}
                      className="text-sm bg-black text-[#F9F9F9] px-3 py-2 rounded-md border"
                    >
                      <option value="month">Last Month</option>
                      <option value="week">Last Week</option>
                      <option value="day">Last 24h</option>
                    </select>
                  </div>

                  <p className="text-sm text-gray-500 mb-4">
                    {timeframe === "month" && "From 7-18 Aug, 2025"}
                    {timeframe === "week" && "From 11-18 Aug, 2021"}
                    {timeframe === "day" && "From 17 Aug, 2021"}
                  </p>

                  <div className="flex items-center">
                    <div className="w-50 h-50">
                      <ResponsiveContainer>
                        <PieChart>
                          <Pie
                            data={data}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            innerRadius={35}
                            outerRadius={55}
                            stroke="none"
                          >
                            <Cell fill="#d1d5db" /> 
                            <Cell fill="#000000" />
                            <Cell fill="#f97316" />
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="ml-6 space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                        <p className="text-sm text-gray-600">
                          Investment{" "}
                          <span className="font-medium">{data[0].value}%</span>
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-black"></span>
                        <p className="text-sm text-gray-600">
                          Food & Drink{" "}
                          <span className="font-medium">{data[1].value}%</span>
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                        <p className="text-sm text-gray-600">
                          Shopping{" "}
                          <span className="font-medium">{data[2].value}%</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
