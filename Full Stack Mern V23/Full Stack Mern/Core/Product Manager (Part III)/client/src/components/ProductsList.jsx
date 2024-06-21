import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export const ProductsList = ({ allProducts, setAllProducts }) => {

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setAllProducts(res.data))
            .catch(err => console.log(err))
    }, [setAllProducts]);

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/products/delete/' + id)
            .then(res => setAllProducts(allProducts.filter(p => p._id !== id)))
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h1>All Products :</h1>
            <ul className="list-group">
                {allProducts.map((oneProduct) => (
                    <li key={oneProduct._id} className="list-group-item list-group-item-secondary">
                        <Link to={`/products/${oneProduct._id}`}>{oneProduct.title}</Link>
                        <button className='btn btn-danger' onClick={() => deleteProduct(oneProduct._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ProductsList;