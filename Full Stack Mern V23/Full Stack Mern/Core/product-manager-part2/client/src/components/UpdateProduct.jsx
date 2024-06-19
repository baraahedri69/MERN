import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = (props) => {
  const { id } = useParams();

  const [ name, setName ] = useState("");
  const [ price, setPrice ] = useState(0);
  const [ description, setDescription ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/find/${id}`)
      .then(res => {
        setName(res.data.product.name);
        setPrice(res.data.product.price);
        setDescription(res.data.product.description);
      })
        .catch(err => console.log(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:8000/api/products/update/${id}`, {
      name,    // this is shortcut syntax for name: name,
      price,
      description
    })
      .then(res => {
        console.log(res);
        navigate("/"); // this will take us back to the Main.js
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <h3>Update a Product</h3>
      <form onSubmit={onSubmitHandler}>
        <h5>
          <label htmlFor="name">Name: </label>
          <input type="text" name='name' value={name} onChange={(e) => {setName(e.target.value)}}/>
        </h5>
        <h5>
          <label htmlFor="price">Price: </label>
          <input type="number" name='price' value={price} onChange={(e) => {setPrice(e.target.value)}}/>
        </h5>
        <h5>
          <label htmlFor="description">Description: </label>
          <input type="text" name='description' value={description} onChange={(e) => {setDescription(e.target.value)}}/>
        </h5>
        <input type="submit" />
      </form>
    </div>
  )
}
export default UpdateProduct;

