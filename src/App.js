import './App.css';
import Header from "./components/Header";
import {useEffect, useState} from "react";
import Location from "./components/Location";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [description, setDescription] = useState({});
    const [weather, setWeather] = useState({});
    const [position, setPosition] = useState({
        lat: "",
        long: "",
    });
    const API_KEY = "7eb6f2b49c8b1ff69de5b2c9f4463a35"
    const city_url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.lat}&longitude=${position.long}&localityLanguage=en`

    const weather_url = `api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lon}&appid=${API_KEY}`

    const fetchCityData = async () => {
       try{
           const cityResponse = await fetch(city_url)
           const cityData = await cityResponse.json()
           setDescription(cityData)
       } catch (error){
           console.log("error",error)
       }

    }
    const fetchWeatherData = async () => {
        try{
            const weatherResponse = await fetch(city_url)
            const weatherData = await weatherResponse.json()
            setDescription(weatherData)
            setLoading(!loading)
        } catch (error){
            console.log("error",error)
        }

    }

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
        fetchCityData();
        fetchWeatherData();
    }, []);

    const darkModeHandler = () => {
        setDarkMode(!darkMode)
        console.log(darkMode)
    }
    if(loading) return <h1>Loading</h1>
    return (
    <div className={`app ${darkMode && "dark"}`}>
      {/* Header (Title , Toggle Switch => Dark / Light Mode)*/}
      <Header darkMode={darkMode} darkModeHandler={darkModeHandler}/>
        <Location position={position} description={description}/>
        {weather}
    </div>
  );
}

export default App;
