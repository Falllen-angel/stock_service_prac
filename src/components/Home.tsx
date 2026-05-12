import CandleChart from "./CandleChart"

type Props = {
  isDark: boolean,
}

export default function Home({isDark}: Props){
  return (
    <div className="flex justify-center items-center">
      <CandleChart isDark={isDark}/>
    </div>
  )
}