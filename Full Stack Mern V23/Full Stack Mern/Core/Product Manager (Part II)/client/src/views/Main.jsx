import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductsList from '../components/ProductsList';

const Main = () => {
    const [allProducts, setAllProducts] = useState([]);
    
    return (
        <div>
            <ProductForm allProducts={allProducts} setAllProducts={setAllProducts} />
            <hr />
            <ProductsList allProducts={allProducts} setAllProducts={setAllProducts} />
        </div>
    )
}
export default Main;