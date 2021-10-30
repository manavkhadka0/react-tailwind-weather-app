import React, {useEffect} from 'react';

const Location = ({position}) => {
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

            </div>
        </div>

    );
};

export default Location;
