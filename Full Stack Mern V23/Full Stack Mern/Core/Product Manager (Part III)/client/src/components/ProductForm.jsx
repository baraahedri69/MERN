import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductForm = ({setAllProducts}) => {
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(1) 
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState([])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products', { title, price, description })
            .then(res => {
                setAllProducts(prevProducts => [...prevProducts, res.data]); 
                setTitle(""); 
                setPrice(1);
                setDescription("");
                setErrors([]);
                navigate('/products') 
            })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errorArr = []
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
    }

    return (
        <div className="container mt-5">
            <h1>Product Manager</h1>
            <div className="mb-3">
                {errors.map((err, index) => (
                    <p key={index} className='text-danger'>{err}</p>
                ))}
            </div>

            <form onSubmit={onSubmitHandler}>
                <div className='mb-3'>
                    <label htmlFor="title" className='form-label'>Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="price" className='form-label'>Price</label>
                    <input type="number" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="description" className='form-label'>Description</label>
                    <input type="text" className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="mb-3">
                    <button className="btn btn-secondary">Create</button>
                </div>
            </form>
        </div>
    );
}

export default ProductForm;