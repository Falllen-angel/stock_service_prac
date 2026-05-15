import { useState } from "react"
// import AreaChart from "./components/AreaChart"
// import BaseLineChart from "./components/BaseLineChart"
// import BarChart from "./components/BarChart"
// import LineChart from "./components/LineChart"
// import HistogramChart from "./components/HistogramChart"
// import YieldCurveChart from "./components/YieldCurveChart"
// import CustomChart from "./components/customBehaviorChart"


import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
// bg-radial-[at_25%_25%] from-indigo-700 to-rgba(112, 48, 239, 0.40)
export default function App(){
  return (
    <>
      <div className="w-screen h-screen p-3 px-5   min-h-screen
  bg-gradient-to-tr
  from-[#02050E]
  via-[#27187E]
  to-[#b700ff]">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />

        </Routes>
      </div>
    </>
  )
}

