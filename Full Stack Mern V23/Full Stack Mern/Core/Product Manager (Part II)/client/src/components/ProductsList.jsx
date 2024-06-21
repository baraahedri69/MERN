import { useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export const ProductsList = (props) => {
    const { allProducts, setAllProducts } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setAllProducts(res.data))
            .catch(err => console.log(err))
    }, [setAllProducts])


    return (
        <div>
            <h1>All Products :</h1>
            <ul className="list-group">
                {allProducts.map((oneProduct, index) => (
                    <li key={oneProduct._id} className="list-group-item list-group-item-secondary">
                        <Link to={`/products/${oneProduct._id}`}>{oneProduct.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ProductsList;