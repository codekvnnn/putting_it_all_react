import React, { useState } from "react";

const PersonCard = (props) => {
    const {firstName, lastName, age, hair} = props;
    const [ stateAge, setStateAge ] = useState(age);

    return (
        <div className = "container">
            <h2>{ lastName },{ firstName }</h2>
            <p>Age: {stateAge}</p>
            <p>Hair Color: { hair }</p>
            <button onClick={() => setStateAge(stateAge + 1)}> Birthday Button for {props.firstName}</button>
        </div>
    );
};


export default PersonCard;