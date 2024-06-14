import React from 'react';
import { useParams } from 'react-router';

const HelloBlueRed = () => {
    const {num, color, background } = useParams();
    return (
        <div style = {{
            height: '150px',
            color: color,
            backgroundColor: background
        }}>
            <h1>{num}</h1>
        </div>
    )
}

export default HelloBlueRed;