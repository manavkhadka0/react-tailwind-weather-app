import React, {useEffect} from 'react';

const Location = ({position,description}) => {
    return (
        <div className="max-w-7xl m-auto">
            <div className="dark-mode p-4 mt-8 inline-block">
                {/* Title */}
                <div className="">
                    <h1 className="text-2xl bold">Your Details</h1>
                </div>
                <div className="">
                    Latitude:{position.lat}
                </div>
                <div className="">
                    longitude:{position.long}
                </div>
                <p>{description.countryName}<sup>{description.countryCode}</sup></p>
                <p>{description.city}</p>

                <img
                    src={`https://flagcdn.com/64x48/${description.countryCode.toLowerCase()}.png`}
                    width="64"
                    height="48"
                    className="inline-block"
                    alt={`${description.countryName}`}/>



            </div>
        </div>

    );
};

export default Location;
