import NavBtn from "./NavBtn";

type Props = {
  isDark: boolean,
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Nav({ isDark, setIsDark }: Props){
  const clickIsDarkHandler = () => {
    setIsDark(!isDark);
  };
  return (
    <nav className="w-full h-16 flex justify-around bg-[#02050E] p-3 mb-10 rounded-b-xs">
      <NavBtn link="/" title="Home"/>
      <button className={`w-20 rounded-lg  cursor-pointer ${isDark?"bg-black text-white":"bg-yellow-50 text-black"}`} onClick={clickIsDarkHandler}>{isDark?"Light":"Dark"}</button>
      <NavBtn link="/SignIn" title="Sign In"/>
    </nav>
  )
}