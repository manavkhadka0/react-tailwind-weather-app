import './App.css';
import Header from "./components/Header";
import {useEffect, useState} from "react";
import axios from "axios";
import Location from "./components/Location";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState({});
    const API_KEY = "7eb6f2b49c8b1ff69de5b2c9f4463a35"
    
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let {latitude, longitude} = position.coords;
                const weather_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
                axios.get(weather_url)
                    .then(res => {
                        setWeather(res.data)
                        setLoading(false)
                    })
            })
            
        } else {
            alert("Sorry, your browser does not support geolocation services.")
        }
        
    }, []);
    
    const darkModeHandler = () => {
        setDarkMode(!darkMode)
        console.log(darkMode)
    }
    if (loading) {
        return <h1>Loading</h1>
    }
    return (
        <div className={`app ${darkMode && "dark"}`}
             style={ !darkMode ? {
            backgroundColor: `#D1D9E1`} : { backgroundColor:`#1E262E`}
        }>
            {/* Header (Title , Toggle Switch => Dark / Light Mode)*/}
                <Header darkMode={darkMode} darkModeHandler={darkModeHandler}/>
                <Location  />
            {console.log(weather)}
        </div>
    );
}

export default App;
