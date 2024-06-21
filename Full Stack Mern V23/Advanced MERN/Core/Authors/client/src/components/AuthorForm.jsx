import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const AuthorForm = () => {
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]); 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/Authors', { name })
            .then(() => navigate('/authors')) 
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            }) 
    };

    const handleReset = () => {
        setName('');
        setErrors([]);
    };

    return (
        <div className="container">
            <Link to="/authors" className="btn btn-secondary mb-3">Home</Link>
            <h1 className="my-4">Add New Author</h1>
            {errors.map((err, index) => <p key={index} className="text-danger">{err}</p>)}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Author Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary mr-2">Submit</button>
                <button type="button" className="btn btn-secondary" onClick={handleReset}>Cancel</button>
            </form>
        </div>
    );
};

export default AuthorForm;