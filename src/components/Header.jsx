import { useState } from "react";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleMode() {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <header className="px-5 py-8 bg-card_light rounded-bl-2xl rounded-br-2xl">
      <div className="border-b border-b-slate-600 pb-4">
        <h1 className="text-2xl font-extrabold">Social Media Dashboard</h1>
        <p className="font-color_light text-sm">Total followers: </p>
      </div>
      <div className="flex justify-between items-center pt-4">
        <p className="font-color_light text-sm">Dark Mode</p>
        <button 
          onClick={toggleMode}
          className={`rounded-full pt-1 pb-1 
            ${!isDarkMode ?  `pl-7  pr-1 bg-toggle_light` : `pl-1 pr-7 bg-toggle_dark`}`}
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