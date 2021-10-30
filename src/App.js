import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {useState} from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    return (
    <div className="app">
      {/* Header (Title , Toggle Switch => Dark / Light Mode)*/}
      <Header/>
    </div>
  );
}

export default App;
