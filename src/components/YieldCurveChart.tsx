import { useEffect, useRef } from "react";

import {
  createYieldCurveChart,
  ColorType,
  LineSeries,
} from 'lightweight-charts';

export default function YieldCurveChart(){
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    if (!chartContainerRef.current) return;

    const chartOption = {
      layout: {
        textColor: 'black',
        background: { tpye: ColorType.Solid, color: 'white' },
      },
      yieldCurve: { 
        baseResolution: 1,
        minimumTimeRange: 10,
        startTimeRange: 3,
      },
      handleScroll: false,
      handleScale: false,
      width: chartContainerRef.current.clientWidth,
      height: 400,
    };

    const chart = createYieldCurveChart(chartContainerRef.current, chartOption);
    const lineSeries = chart.addSeries(LineSeries, { color: '#2962FF' });
  
    const curve = [
      { time: 1, value: 5.378 },
      { time: 2, value: 5.372 }, 
      { time: 3, value: 5.271 },
      { time: 6, value: 5.094 }, 
      { time: 12, value: 4.739 }, 
      { time: 24, value: 4.237 }, 
      { time: 36, value: 4.036 }, 
      { time: 60, value: 3.887 }, 
      { time: 84, value: 3.921 }, 
      { time: 120, value: 4.007 }, 
      { time: 240, value: 4.366 }, 
      { time: 360, value: 4.290 }
    ];
    
    lineSeries.setData(curve);

    chart.timeScale().fitContent();

    return ()=>{
      chart.remove();
    };
    
  },[]);
  
  return <div ref={chartContainerRef}></div>;
}