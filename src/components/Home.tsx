import CandleChart from "./CandleChart"

type Props = {
  isDark: boolean,
}

export default function Home({isDark}: Props){
  
  return (
    <main className="w-screen h-screen flex flex-col p-3 px-10 pt-5">
      <div className="w-full">
        <span>TESLA</span>
      </div>
      <section
        className={`w-full h-3/4 flex p-5 justify-center items-start`}>
        <CandleChart isDark={isDark}/>
      </section>
    </main>
  )
}