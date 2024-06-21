import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateProduct() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(1)
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => console.error(err))
    }, [id])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.patch('http://localhost:8000/api/' + id + '/edit', { title, price, description })
            .then(res => navigate("/products"))
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
            <h1>Edit Product </h1>
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
                    <button className="btn btn-secondary">Update</button>
                </div>
            </form>
        </div>
    );
}
export default UpdateProduct; 