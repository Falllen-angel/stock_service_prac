import { useEffect, useRef } from "react";

import {
  createChart,
  ColorType,
  LineSeries,
} from 'lightweight-charts';

export default function LineChart(){
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    if(!chartContainerRef.current) return;

    const chartOption = {
      layout: { textColor: 'black', background: { type: ColorType.Solid, color: 'white' } },
      width: chartContainerRef.current.clientWidth,
      height: 400,
    }

    const chart = createChart(chartContainerRef.current, chartOption);

    const lineSeries = chart.addSeries(LineSeries, { color: '#2962FF' });

    const data = [
      { value: 1, time: 1642425322 },
      { value: 8, time: 1642511722 }, 
      { value: 10, time: 1642598122 }, 
      { value: 20, time: 1642684522 }, 
      { value: 3, time: 1642770922 }, 
      { value: 43, time: 1642857322 }, 
      { value: 41, time: 1642943722 }, 
      { value: 43, time: 1643030122 }, 
      { value: 56, time: 1643116522 }, 
      { value: 46, time: 1643202922 }
    ];

    lineSeries.setData(data);

    chart.timeScale().fitContent();

    return ()=>{
      chart.remove();
    }
  }, []);
  
  
  return <div ref={chartContainerRef}></div>;
}