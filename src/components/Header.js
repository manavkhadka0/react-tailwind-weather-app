import React from 'react';
import {BsSunFill,BsFillMoonStarsFill} from "react-icons/bs"

const Header = ({darkMode, darkModeHandler}) => {
    return (
        /* Header */
        <div className="px-8 xl:px-0 dark-mode">
            {/* ITEMS */}
            <div className="py-8 flex items-center max-w-7xl justify-between m-auto">
                {/* TITLE */}
                <div className="title">
                    <h1 className="text-lg md:text-3xl  font-bold">Weather App</h1>
                </div>
                {/*TOGGLE SWITCH */}
                <div className="button flex items-center flex-col w-14">
                    <div
                        className="relative w-full inline-block mr-2 align-middle select-none transition duration-200 ease-in ">
                        <input type="checkbox" name="toggle" id="toggle"
                               onClick={darkModeHandler}
                               className="toggle-checkbox  absolute block h-5 w-5 rounded-full bg-white border-4 appearance-none cursor-pointer "/>
                        <label htmlFor="toggle"
                               className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer "/>
                    </div>
                    <label htmlFor="toggle" className="text-lg mt-4">{darkMode ? <BsFillMoonStarsFill/> : <BsSunFill/>}</label>
                </div>
            </div>
        </div>
    
    );
}

export default Header;