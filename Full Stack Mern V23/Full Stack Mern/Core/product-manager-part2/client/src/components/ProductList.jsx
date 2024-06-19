import React, {useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';
const ProductList = (props) => {
  const {removeFromDom, product, setProduct} = props;
  
  useEffect(()=>{
    axios.get("http://localhost:8000/api/products/find/all")
      .then((res)=>{
        console.log(res.data.products);
        setProduct(res.data.products);
      })
      .catch(err=>console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8000/api/products/delete/${id}`)
      .then(res => {
        window.location.reload(false)
        removeFromDom(id)
      })
      .catch(err=>console.log(err))
  }

  return (
    <div>
      {
        product.map((item, index)=>{
        return(
          <h5 className='productDetails' key={index}>
            <Link to={`/product/${item._id}`}>{item.name}</Link>
            <Link className='productItem' to={`/product/edit/${item._id}`}>Edit</Link>
            <button className='productItem' onClick={(e) => {deleteProduct(item._id)}} >Delete</button>
          </h5>
        )})
      }
    </div>
  )
}
export default ProductList;

