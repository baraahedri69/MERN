import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';
import EditAuthor from './components/EditAuthor';

function App() {
    return (
        <div className="App container">
            <h1 className="mt-4">Favorite Authors</h1>
            <Routes>
                <Route path="/authors" element={<AuthorList />} />
                <Route path="/authors/new" element={<AuthorForm />} />
                <Route path="/authors/edit/:id" element={<EditAuthor />} />
            </Routes>
        </div>
    );
}

export default App;