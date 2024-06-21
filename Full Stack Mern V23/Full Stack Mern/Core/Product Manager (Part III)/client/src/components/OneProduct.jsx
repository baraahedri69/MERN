import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function OneProduct() {
    
    const navigate = useNavigate()
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=> {
        axios.get("http://localhost:8000/api/products/" + id)
        .then(res=>setProduct(res.data))
        .catch(err=>console.error(err))
    }, [id])

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/products/delete/' + id)
            .then(res => setProducts(product.filter(p => p._id !== id)),  
            navigate('/products'))
            .catch(err => console.error(err))
    }

    return (
        <div className="container mt-5">
            <div className="card">
                <h1>{product.title}</h1>
                <div className="card-body">
                    <h3>Price: ${product.price}</h3>
                    <h3>Description: {product.description}</h3>
                </div>
                <button className='btn btn-secondary' onClick={() => navigate(`/${product._id}/edit`)}>Edit</button>
                <button className='btn btn-danger' onClick={() => deleteProduct(product._id)}>Delete</button>
            </div>
        </div>
    );
}

export default OneProduct; 