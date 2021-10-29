import React from 'react';

const Header = () => {
    return (
        <div className="p-8 bg-gray-200 flex items-center justify-center space-x-60">
            <div className="title">
                <h1 className="text-3xl font-bold text-gray-700">Weather App</h1>
            </div>
            <div className="button flex flex-col">
                <div
                    className="relative inline-block mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle"
                           className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer "/>
                    <label htmlFor="toggle"
                           className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"/>
                </div>
                <label htmlFor="toggle" className="text-xs text-gray-700">Toggle me.</label>
            </div>

        </div>
    );
}

export default Header;