import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {useState} from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const darkModeHandler = () => {
        setDarkMode(!darkMode)
        console.log(darkMode)
    }
    return (
    <div className={`app ${darkMode && "dark"}`}>
      {/* Header (Title , Toggle Switch => Dark / Light Mode)*/}
      <Header darkMode={darkMode} darkModeHandler={darkModeHandler}/>
    </div>
  );
}

export default App;
