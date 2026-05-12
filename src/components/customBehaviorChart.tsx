import { createChartEx, defaultHorzScaleBehavior, ColorType } from "lightweight-charts";
import { useEffect, useRef } from "react";


export default function CustomChart(){

  const chartContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(()=>{
    if(!chartContainerRef.current) return;

    const chartOption = {
      layout: {
        textColor: 'black',
        background: {
          type: ColorType.Solid,
          color: 'white',
        },
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
    };
    
    const customBehavior = new defaultHorzScaleBehavior();

    
    const chart = createChartEx(chartContainerRef.current, customBehavior, chartOption)


    return ()=>{
      chart.remove();
    };
    
  },[]);

  return <div ref={chartContainerRef}></div>
}