import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {useState} from "react";
import Location from "./components/Location";

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
        <Location/>
    </div>
  );
}

export default App;
