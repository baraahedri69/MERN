import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const [name, setName] = useState("people");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  
  const submit = (e) => {
    e.preventDefault();
    navigate(`/${name}/${id}`);
  }
  
  return (
    <nav className="navbar bg-light">
      <div className="navbar-brand">
        <form className="d-flex" onSubmit={ submit }>
          <div className="me-4">
            <div className="d-flex">
              <label className="form-label me-2">Search For: </label>
              <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange ={(e) => setName(e.target.value)} value={name}>
                <option value="people">People</option>
                <option value="planet">Planet</option>
              </select>
            </div>
          </div>
          <div className="me-4">
            <div className="d-flex">
              <label className="col-form-label me-2">ID</label>
              <input type="text" className="form-control" onChange={ (e) => setId(e.target.value) } value={ id } />
            </div>
          </div>
          <div className="me-4">
            <input type="submit" value="Search" className="btn btn-dark" />
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Form;