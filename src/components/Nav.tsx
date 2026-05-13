import NavBtn from "./NavBtn";

// import { MdOutlineLightMode } from "react-icons/md";
// import { MdDarkMode } from "react-icons/md";

type Props = {
  isDark: boolean,
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Nav({ isDark, setIsDark }: Props){
  const clickIsDarkHandler = () => {
    setIsDark(!isDark);
  };
  return (
    <nav className="w-full h-12 flex justify-between items-center bg-[#27187E] p-3 px-8 rounded-b-xs">
      <ul className="w-fit h-fit flex flex-wrap">
        <li className="w-fit h-fit">
          <NavBtn link="/" color="none" >
            <img src="/Rectangle.svg" alt="logo" />
          </NavBtn>
        </li>
      </ul>
      <ul className="w-fit h-fit flex flex-wrap justify-between">
        {/* <li className="w-fit h-fit">
          <button 
            className={`w-fit rounded-full  cursor-pointer 
            ${isDark?"bg-yellow-50 text-black":"bg-black text-white"}`} 
            onClick={clickIsDarkHandler}>
              {isDark?<MdOutlineLightMode size={24}/>:<MdDarkMode size={20}/>}
          </button>
        </li> */}
        <li className="w-fit h-fit"><NavBtn link="/SignIn" color="#F7F7FF" ><span>Sign In</span></NavBtn></li>
      </ul>
    </nav>
  )
}