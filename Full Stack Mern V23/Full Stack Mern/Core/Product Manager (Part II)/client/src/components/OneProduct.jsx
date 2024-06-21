import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function OneProduct() {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=> {
        axios.get("http://localhost:8000/api/products/" + id)
        .then(res=>setProduct(res.data))
        .catch(err=>console.error(err))
    }, [id])

    return (
        <div className="container mt-5">
            <div className="card">
                <h1>{product.title}</h1>
                <div className="card-body">
                    <h3>Price: ${product.price}</h3>
                    <h3>Description: {product.description}</h3>
                </div>
            </div>
        </div>
    );
}

export default OneProduct; 