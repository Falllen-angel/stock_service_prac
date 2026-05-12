import { useEffect, useRef } from 'react'
import {
  createChart,
  ColorType,
  AreaSeries, 
} from 'lightweight-charts'

import type {
  IChartApi,
  ISeriesApi,
  AreaData,
} from 'lightweight-charts'

import type { UTCTimestamp } from 'lightweight-charts'

type Props = {
  isDark: boolean,
}

export default function AreaChart({ isDark }: Props){
  const chartContainerRef = useRef<HTMLDivElement>(null); // 타입을 지정해서 <div>타입만 받게 많듦. useRef로 chart데이터를 DOM에 저장함

  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<'Area'> | null>(null);

  useEffect(()=>{
    if(!chartContainerRef.current) return;
    
    const chart = createChart(chartContainerRef.current, {
      layout: { 
        textColor: 'black',
        background: {
          type: ColorType.Solid,
          color: 'white',
        }
      },
      width: 1000,
      height: 500
    });

    const areaSeries = chart.addSeries(AreaSeries, {
      lineColor: '#2962FF',
      topColor: '#2962FF',
      bottomColor: 'rgba(41, 98, 255, 0.28)',
    })

    const data: AreaData[] = [
      { value: 0, time: 1642425322 as UTCTimestamp  },
      { value: 8, time: 1642511722 as UTCTimestamp  }, 
      { value: 10, time: 1642598122 as UTCTimestamp  }, 
      { value: 20, time: 1642684522 as UTCTimestamp  }, 
      { value: 3, time: 1642770922 as UTCTimestamp  }, 
      { value: 43, time: 1642857322 as UTCTimestamp  }, 
      { value: 41, time: 1642943722 as UTCTimestamp  }, 
      { value: 43, time: 1643030122 as UTCTimestamp  }, 
      { value: 56, time: 1643116522 as UTCTimestamp  }, 
      { value: 46, time: 1643202922 as UTCTimestamp  }
    ];

    areaSeries.setData(data);
    
    const timeout = setTimeout(() => {
      areaSeries.update(
        { value: 50, time: 1643302922 as UTCTimestamp  },
      )
    }, 3000);

    chartRef.current = chart
    seriesRef.current = areaSeries;

    // 차트 크기를 화면 사이즈에 맞게 띄움
    chart.timeScale().fitContent();

    return () => {
      clearTimeout(timeout);
      chart.remove()
    }
  }, [])

  useEffect(()=>{
    if(!chartRef.current) return;

    chartRef.current.applyOptions({
      layout: {
        background: {
          type: ColorType.Solid,
          color: isDark ? '#000' : '#fff',
        },
        textColor: isDark ? '#ddd' : '#000',
      },
      grid: {
        vertLines: {
          color: isDark ? '#444' : '#e1e1e1',
        },
        horzLines: {
          color: isDark ? '#444' : '#e1e1e1',
        },
      },
    })
    
  }, [isDark]);
  
  return (
    <div ref={chartContainerRef} />
  )
}