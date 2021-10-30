import './App.css';
import Header from "./components/Header";
import {useEffect, useState} from "react";
import Location from "./components/Location";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [position, setPosition] = useState({
        lat: "",
        long: "",
    });
    const [description, setDescription] = useState({});
    const city_url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.lat}&longitude=${position.long}&localityLanguage=en`

    const fetchData = async () => {
       try{
           const response = await fetch(city_url)
           const json = await response.json()
           setDescription(json)
           console.log(description)
           console.log(position)
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
        fetchData();




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
