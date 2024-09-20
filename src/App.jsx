import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState, useEffect } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const rootElement = document.getElementById("root");
    rootElement.style.backgroundColor = isDarkMode ? `hsl(230, 17%, 14%)` : `white`;
  }, [isDarkMode])

  return (
    <>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Main isDarkMode={isDarkMode}/>
    </>
  )
}

export default App
