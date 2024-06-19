import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [description, setDescription] = useState("");

  const nav = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      productTitle: productTitle,
      productPrice: productPrice,
      description: description,
    };
    axios
      .post("http://127.0.0.1:7000/api/product/", obj)
      .then((res) => {
        console.log("✅✅✅✅", res.data);
        nav("/");
      })
      .catch((err) => console.log("❌❌❌❌❌", err));

    setProductPrice("");
    setProductTitle("");
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          Title :
          <input
            type="text"
            name="productTitle"
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
          />
        </div>
        <div>
          Price :
          <input
            type="number"
            name="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div>
          Description :
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
