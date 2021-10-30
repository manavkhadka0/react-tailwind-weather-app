import React, {useEffect} from 'react';

const Location = ({position,description}) => {
    return (
        <div className="max-w-7xl m-auto flex justify-center items-center">
            <div className="w-96 rounded-lg dark-mode  mt-8 inline-block">
                {/* Title */}
                <div className="text-center">
                    <h1 className="p-4 text-2xl bold border-b-2 dark:border-gray-200 border-gray-700">Your Details</h1>
                </div>
                <div className="flex p-4 items-center">
                    <div className="">
                        <p>{description.countryName}<sup>{description.countryCode}</sup></p>
                        <p>{description.city}</p>
                    </div>
                    <div className="">
                        <img
                            src={`https://flagcdn.com/64x48/${description.countryCode.toLowerCase()}.png`}
                            width="64"
                            height="48"
                            className="inline-block"
                            alt={`${description.countryName}`}/>
                    </div>
                </div>







            </div>
        </div>

    );
};

export default Location;
