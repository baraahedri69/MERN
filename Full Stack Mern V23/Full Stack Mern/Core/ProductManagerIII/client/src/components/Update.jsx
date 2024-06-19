import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const nav = useNavigate();
  const { id } = useParams();

  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:7000/api/product/" + id)
      .then((res) => {
        console.log(res.data);
        setProductTitle(res.data.productTitle);
        setProductPrice(res.data.productPrice);
        setDescription(res.data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const updateHandler = (e) => {
    e.preventDefault();
    const newObj = {
      productTitle: productTitle,
      productPrice: productPrice,
      description: description,
    };
    axios
      .patch(`http://127.0.0.1:7000/api/product/${id}`, newObj)
      .then((res) => {
        console.log("✅✅✅✅", res.data);
        nav("/");
      })
      .catch((err) => console.log("❌❌❌❌❌", err));
  };

  return (
    <div>
      Update
      <form onSubmit={updateHandler}>
        <div>
          Product Title :
          <input
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
          />
        </div>
        <div>
          Product Price :
          <input
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div>
          Description :
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button>Update Product</button>
      </form>
    </div>
  );
};

export default Update;
