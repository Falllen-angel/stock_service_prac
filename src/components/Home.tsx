import CandleChart from "./CandleChart"


export default function Home(){
  
  return (
    <main className="w-full h-screen flex flex-col p-3 px-12 pt-5">
      <div className="w-full h-14 rounded-3xl bg-white/10 backdrop-blur-xl mb-5">
        <span>stock</span>
      </div>
      <section className={`w-full h-3/4`}>
        <CandleChart/>
      </section>
    </main>
  )
}