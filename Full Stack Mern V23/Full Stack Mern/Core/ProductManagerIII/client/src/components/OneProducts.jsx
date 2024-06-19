import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OneProducts = () => {
  const { id } = useParams();
  const [oneproduct, setOneProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:7000/api/product/" + id)
      .then((res) => {
        console.log(res.data);
        setOneProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      Oneproduct
      {oneproduct ? (
        <ul>
          <li> {oneproduct.productTitle} </li>
          <li> {oneproduct.productPrice} </li>
          <li> {oneproduct.description} </li>
        </ul>
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
};
export default OneProducts;
