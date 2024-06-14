import React from 'react'
import { useParams } from 'react-router';


const Number = (props) => {
    const {num} = useParams();

    return (
        <div>
            {
                isNaN(num)? 
                <h1>The word is: {num}</h1>:
                <h1>The number is: {num}</h1>
            }
        </div>
    );
}

export default Number;