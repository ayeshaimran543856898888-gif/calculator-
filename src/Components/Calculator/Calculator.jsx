import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [FirstNmbr, setFirstNmbr] = useState(null);
  const [isOn, setIsON] = useState(false);
  const [answer,setanswer] = useState("")
  return (
    <>
    
      <div className="min-h-screen  bg-[#90d0e5] flex items-center justify-center ">
        <div
          className={` relative w-81 rounded-[30px] p-6 shadow-[10px_-10px_40px_rgba(0,140,255,0.45)] ${
            isOn ? "bg-blue-100" : "bg-[#0b1728]"
          }`}
        >
          <div className="h-32 text-white flex flex-col justify-end items-end px-6 pt-6 mb-5 ">
            <p className="text-3xl">{display}</p>
            <h1 className="text-white text-4xl  font-semibold">= {answer}</h1>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <button className=" w-14 h-14 rounded-xl bg-[#172a42] text-blue-400 ">
              e
            </button>
            <button className="h-14 rounded-xl bg-[#172a42] text-blue-400">
              μ
            </button>
            <button className="h-14 rounded-xl bg-[#172a42] text-blue-400">
              sin
            </button>
            <button
              onClick={() => setIsON(!isOn)}
              className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                isOn
                  ? "bg-white shadow-[4px_4px_10px_rgba(255,255,255,0.5)]"
                  : "bg-[#172a42]"
              }`}
            >
              <span
                className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 ${
                  isOn ? "left-9" : "left-1"
                }`}
              ></span>
            </button>
            <button
              onClick={() => {
                setDisplay("0");
                setanswer("0");
              }}
              className=" w-14 h-14 rounded-xl bg-[#506073] text-cyan-100 "
            >
              AC
            </button>
            <button
              onClick={() => setDisplay(display.slice(0, -1))}
              className="h-14 rounded-xl bg-[#506073] text-cyan-100"
            >
              ⌫
            </button>
            <button
              onClick={() => {
                setFirstNmbr(display);
                setDisplay(display + "/");
              }}
              className="h-14 rounded-xl font-medium bg-blue-600 text-blue-400"
            >
              /
            </button>
            <button
              onClick={() => {
                setFirstNmbr(display);
                setDisplay(display + "*");
              }}
              className="h-14 rounded-xl text-2xl bg-blue-600 text-blue-300"
            >
              *
            </button>
            <button
              onClick={() => setDisplay(display === "0" ? "7" : display + "7")}
              className=" w-14 h-14 rounded-xl text-2xl bg-[#506073] text-blue-400 "
            >
              7
            </button>
            <button
              onClick={() => setDisplay(display === "0" ? "8" : display + "8")}
              className=" w-14 h-14 rounded-xl text-2xl bg-[#506073] text-blue-400 "
            >
              8
            </button>
            <button
              onClick={() => setDisplay(display === "0" ? "9" : display + "9")}
              className=" w-14 h-14 rounded-xl text-2xl  bg-[#506073] text-blue-400 "
            >
              9
            </button>
            <button
              onClick={() => {
                setFirstNmbr(display);
                setDisplay(display + "-");
              }}
              className=" w-15 h-14 rounded-xl text-3xl bg-blue-600 text-cyan-100 "
            >
              -
            </button>
            <button
              onClick={() => setDisplay(display === "0" ? "4" : display + "4")}
              className=" w-14 h-14 rounded-xl text-2xl bg-[#506073] text-blue-400 "
            >
              4
            </button>
            <button
              onClick={() => setDisplay(display === "0" ? "5" : display + "5")}
              className=" w-14 h-14 rounded-xl text-2xl bg-[#506073] text-blue-400"
            >
              5
            </button>
            <button
              onClick={() => setDisplay(display === "0" ? "6" : display + "6")}
              className=" w-14 h-14 rounded-xl text-2xl bg-[#506073] text-blue-500 "
            >
              6
            </button>
            <button
              onClick={() => {
                setFirstNmbr(display);
                setDisplay(display + "+");
              }}
              className="h-14 rounded-xl bg-blue-600 text-white"
            >
              +
            </button>
            <button
              onClick={() => setDisplay(display === "0" ? "1" : display + "1")}
              className=" w-14 h-14 rounded-xl text-2xl bg-[#506073] text-blue-500 "
            >
              1
            </button>
            <button
              onClick={() => setDisplay(display === "0" ? "2" : display + "2")}
              className=" w-14 h-14 rounded-xl text-2xl bg-[#506073] text-blue-500 "
            >
              2
            </button>
            <button
              onClick={() => setDisplay(display === "0" ? "3" : display + "3")}
              className=" w-14 h-14 rounded-xl text-2xl bg-[#506073] text-blue-500 "
            >
              3
            </button>
            <button
              onClick={() => {
                if (display.includes("+")) {
                  const [num1, num2] = display.split("+");
                  const result = Number(num1) + Number(num2);
                  setanswer(result.toString());
                }
                if (display.includes("-")) {
                  const [num1, num2] = display.split("-");
                  const result = Number(num1) - Number(num2);
                  setanswer(result.toString());
                }
                if (display.includes("*")) {
                  const [num1, num2] = display.split("*");
                  const result = Number(num1) * Number(num2);
                  setanswer(result.toString());
                }
                if (display.includes("/")) {
                  const [num1, num2] = display.split("/");
                  const result = Number(num1) / Number(num2);
                  setanswer(result.toString());
                }
              }}
              className="h-28 rounded-xl mt-2 bg-blue-600 text-white row-span-2"
            >
              =
            </button>
            <button
              onClick={() => setDisplay(display === "0" ? "0" : display + "0")}
              className="h-14 bg-[#506073] text-2xl rounded-xl text-blue-600 col-span-2"
            >
              0
            </button>
            <button 
            onClick={() => {
                setFirstNmbr(display);
                setDisplay(display + ".");
              }}
            className=" w-14 h-14 rounded-xl text-2xl bg-[#506073] text-blue-500 ">
              .
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
