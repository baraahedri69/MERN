import React, { useState } from 'react';

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
    const [currentAge, setCurrentAge] = useState(age);

    const handleBirthday = () => {
        setCurrentAge(currentAge + 1);
    };

    return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={handleBirthday}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
};

export default PersonCard;