import React from 'react';

const Header = ({darkMode, darkModeHandler}) => {
    return (
        /* Header */
        <div className="bg-gray-200 bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 transition duration-500 shadow-xl">
            {/* ITEMS */}
            <div className="p-8   flex items-center max-w-7xl justify-between m-auto">
                {/* TITLE */}
                <div className="title">
                    <h1 className="text-lg md:text-3xl  font-bold">Weather App</h1>
                </div>

                {/*TOGGLE SWITCH */}
                <div className="button flex flex-col">
                    <div
                        className="relative inline-block mr-2 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" name="toggle" id="toggle"
                               onClick={darkModeHandler}
                               className="toggle-checkbox absolute block h-5 w-5 md:w-6 md:h-6 rounded-full bg-white border-4 appearance-none cursor-pointer "/>
                        <label htmlFor="toggle"
                               className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"/>
                    </div>
                    <label htmlFor="toggle" className="text-xs">{darkMode ? "Light Mode" : "Dark Mode" }</label>
                </div>
            </div>
        </div>

    );
}

export default Header;