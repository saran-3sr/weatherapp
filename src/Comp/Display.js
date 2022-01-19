import React, { useEffect } from "react";


function Display({location,current})
{
    const CurrentData=current["condition"]
    return(
        <div className="display container">
            <div className="container">
                <h1 className="text-center">{CurrentData["text"]}</h1>
                <img className="mx-auto d-block" src={CurrentData["icon"]} alt={CurrentData["text"]} />
                <hr className="line"/>
            </div>
            <div className="temp container">
                <h1 className="text-center">{current["temp_c"]}  &#8451;</h1>
                <p className="text-center">Feels Like {current["feelslike_c"]}&#8451;</p>
            </div>
            <div className="container location">
                <p className="text-center">{location["name"]}, {location["region"]}</p>
            </div>
            <hr className="line"/>
            <div className="wind container d-flex flex-column flex-md-row justify-content-between">
                <p className="text-center">Humidity: {current["humidity"]}</p>
                <p className="text-center">Wind Direction: {current["wind_dir"]}</p>
                <p className="text-center">Wind Speed: {current["wind_kph"]} KPH</p>
                <p className="text-center">Visibility: {current["vis_km"]} Km</p>
                <p className="text-center">UV: {current["uv"]} </p>
            </div>
            <hr className="line"/>
        </div>
    )
}

export default Display