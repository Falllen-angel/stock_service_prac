import { useEffect, useRef } from 'react'
import {
  createChart,
  ColorType,
  CandlestickSeries,
} from 'lightweight-charts'

import type {
  IChartApi,
  ISeriesApi,
  CandlestickData,
} from 'lightweight-charts'


export default function CandleChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null)

  const chartRef = useRef<IChartApi | null>(null)
  const seriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null)
// '#27187E'
  // 1. 차트 최초 생성 (딱 1번)
  useEffect(() => {
    if (!chartContainerRef.current) return

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: {
          type: ColorType.Solid,
          color: 'transparent',
        },
        textColor: '#ddd',
      },
      grid: {
        vertLines: {
          color: 'rgba(255,255,255,0.03)',
        },
        horzLines: {
          color: 'rgba(255,255,255,0.03)',
        },
      },
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
    })

    const candleStickSeries = chart.addSeries(CandlestickSeries, {
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    })
    const data: CandlestickData[] = [];

    let lastClose = 100;

    const startDate = new Date('2012-09-01');

    for (let i = 0; i < 5000; i++) {
      const currentDate = new Date(startDate);

      currentDate.setDate(startDate.getDate() + i);

      const yyyy = currentDate.getFullYear();

      const mm = String(currentDate.getMonth() + 1).padStart(2, '0');

      const dd = String(currentDate.getDate()).padStart(2, '0');

      const open = lastClose;

      const change = (Math.random() - 0.5) * 20;

      const close = open + change;

      const high = Math.max(open, close) + Math.random() * 10;

      const low = Math.min(open, close) - Math.random() * 10;

      data.push({
        time: `${yyyy}-${mm}-${dd}`,

        open: Number(open.toFixed(2)),
        high: Number(high.toFixed(2)),
        low: Number(low.toFixed(2)),
        close: Number(close.toFixed(2)),
      });

      lastClose = close;
    }

    candleStickSeries.setData(data)

    // chart.timeScale().fitContent()

    const handleResize = () => {
      if(!chartContainerRef.current) return;
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    };
    
    window.addEventListener('resize', handleResize)
    
    const timeout = setTimeout(() => {
      candleStickSeries.update({
        time: '2026-05-10',
        open: 85.66,
        high: 200.00,
        low: 85.66,
        close: 151.26 
      })
    }, 1000);
    
    chartRef.current = chart
    seriesRef.current = candleStickSeries

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', handleResize);
      chart.remove();

    }
  }, [])

  // 2. 다크모드 변경 (차트 재생성 X)

  return (
    <div 
      style={{
        // backgroundColor: '#F7F7FF'
      }}
      className='w-full h-2/3 p-3 rounded-4xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden'>
      <div
        ref={chartContainerRef}
        className='w-full h-full rounded-3xl overflow-hidden border border-[#27187E] shadow-xl cursor-crosshair'
      />
    </div>
  )
}