import { useState } from "react";

function Header({isDarkMode, setIsDarkMode}) {
  function toggleMode() {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <header 
      className={
        `px-5 pt-8 pb-16 rounded-bl-2xl rounded-br-2xl 
        ${isDarkMode ? `bg-very_dark_blue`:`bg-card_light`}
        lg:flex lg:justify-between lg:items-center lg:px-16`
      }>
      <div className="border-b border-b-slate-600 pb-4 lg:border-b-0">
        <h1 className={`text-2xl font-extrabold ${isDarkMode ? `text-white`:`text-black`}`}>
          Social Media Dashboard
        </h1>
        <p className="font-color_light text-sm font-bold">Total followers: 23.004</p>
      </div>
      <div className="flex justify-between items-center pt-4 lg:pt-0 lg:gap-4">
        <p className="font-color_light text-sm font-bold">Dark Mode</p>
        <button 
          onClick={toggleMode}
          className={`rounded-full pt-1 pb-1 
            ${!isDarkMode ?  
              `pl-7  pr-1 bg-toggle_light hover:bg-gradient-to-l from-blueHover to-greenHover ` 
              : 
              `pl-1 pr-7 bg-toggle_dark`}
          `}
          aria-label="toggle mode"
          >
          <div 
            className={`rounded-full w-4 h-4 ${!isDarkMode ? `bg-white` : `bg-very_dark_blue`}`}>
          </div>
        </button>
      </div>
    </header>
  )
}

export default Header;