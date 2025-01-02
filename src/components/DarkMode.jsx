import React, { useEffect, useState } from 'react';
import light from "../assets/light-mode-button.png";
import dark from "../assets/dark.png";

const DarkMode = () => {
  const [theme, setTheme]= useState(
     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(()=>{
     if(theme === "dark") {
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
     } else{
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
     }
  }, [theme]);
  return (
    <div className='relative'>
        <img src={light} onClick={()=> setTheme(theme === "light" ? "dark" : "light")} className= {`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`} />
        <img src={dark} onClick={()=> setTheme(theme === "dark" ? "light" : "dark")}  className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300'/>
   </div>
  )
}

export default DarkMode