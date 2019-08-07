import React from "react";

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Brr, it is cold!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer"
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === "winter" ? "Brrr, it's chilly" : "Lets hit the beach!";
    const icon = season === "winter" ? "snowflake" : "sun";

    return (
        <div>
            <i className={`${icon} icon`}></i>
            <h1>{text}</h1>
            <i className={`${icon} icon`}></i>
        </div>

    )

}

export default SeasonDisplay;