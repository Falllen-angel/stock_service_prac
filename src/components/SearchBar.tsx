import { useState } from "react"


type Props = {
  handleSearch: (q:string)=>void
}

export default function SearchBar({handleSearch} : Props){
  const [searchStock, setSearchStock] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(searchStock)
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/3 h-fit flex justify-center items-center">
      <input 
        required 
        onChange={(e) => setSearchStock(e.target.value)} 
        type="text" 
        placeholder="Search"
        className="
          w-full
          px-4
          py-1
          rounded-2xl

          bg-white/10
          backdrop-blur-xl


          text-white
          placeholder:text-white/50

          outline-none
        "
        />

    </form>
  )
}