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
import useWindowDimensions from "./components/UseWindowDimensions";

import Nav from "./components/Nav";

export default function App(){
  const [isDark, setIsDark] = useState<boolean>(false);
  const {width, height} = useWindowDimensions()
  
  return (
    <>
      <div style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        className={
          isDark
            ? 'bg-[#02050E]'
            : 'bg-white'
        }>
        <Nav isDark={isDark} setIsDark={setIsDark} />
        <Routes>
          <Route path='/' element={<Home isDark={isDark} />} />

        </Routes>
      </div>
    </>
  )
}