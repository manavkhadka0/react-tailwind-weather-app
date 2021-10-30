import './App.css';
import Header from "./components/Header";
import {useEffect, useState} from "react";
import Location from "./components/Location";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [position, setPosition] = useState({
        lat: "",
        long: ""
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function (position){
                setPosition(
                    {
                        lat: position.coords.latitude,
                        long: position.coords.longitude
                    }
                )
            })
    }, []);

    const darkModeHandler = () => {
        setDarkMode(!darkMode)
        console.log(darkMode)
    }
    return (
    <div className={`app ${darkMode && "dark"}`}>
      {/* Header (Title , Toggle Switch => Dark / Light Mode)*/}
      <Header darkMode={darkMode} darkModeHandler={darkModeHandler}/>
        <Location position={position}/>
    </div>
  );
}

export default App;
