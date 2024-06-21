import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EditAuthor = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/api/authors/' + id)
            .then(res => setName(res.data.name))
            .catch(err => setError("We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?"));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:5000/api/authors/' + id, { name })
            .then(() => navigate('/authors'))
            .catch(err => setError(err.response.data.error));
    };

    return (
        <div className="container mt-5">
            <Link to="/authors" className="btn btn-secondary mb-3">Home</Link>
            <h2>Edit Author</h2>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="form-control" 
                        placeholder="Author Name" 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Author</button>
            </form>
        </div>
    );
};

export default EditAuthor;