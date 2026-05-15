import {useNavigate } from "react-router-dom"
import axios from "axios";
import NavBtn from "./NavBtn";
import SearchBar from "./SearchBar";


export default function Nav(){
  const navigate = useNavigate();

  const handleSearch = async (q: string) => {
    try {
      const response = await axios(
        `$https://localhost:5173/search/1?q=${q}`
      )
      console.log(response.data);
      navigate(`/search/1?q=${encodeURIComponent(q)}`)
    } catch(error){
      console.log(error)
    }
  }
  
  return (
    <nav className="
      h-12 
      p-3 
      px-12
      flex 
      justify-between 
      items-center 
      rounded-4xl 
      bg-white/10
      backdrop-blur-xl 
      shadow-2xl
    ">
      <ul className="w-1/3 h-fit flex flex-wrap justify-start items-center">
        <li className="w-fit h-fit">
          <NavBtn link="/" color="none" >
            <img src="/Rectangle.svg" alt="logo" />
          </NavBtn>
        </li>
      </ul>
      <SearchBar handleSearch={handleSearch}/>
      <ul className="w-1/3 h-fit flex flex-wrap justify-end items-center">
        <li className="w-fit h-fit"><NavBtn link="/SignIn" color="#bbef1f" ><span>Sign In</span></NavBtn></li>
      </ul>
    </nav>
  )
}