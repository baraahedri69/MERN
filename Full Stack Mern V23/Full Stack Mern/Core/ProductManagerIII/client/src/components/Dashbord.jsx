import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashbord = () => {
  //1
  const [products, setProducts] = useState([]);

  //2
  function refresh() {
    axios
      .get("http://127.0.0.1:7000/api/product/")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    refresh();
  }, []);

  const DeleteThisProduct = (deleteId) => {
    axios
      .delete("http://127.0.0.1:7000/api/product/" + deleteId)
      .then((res) => {
        refresh();
        console.log(res.data);
        const filteredProducts = products.filter((eachProduct) => {
          return eachProduct._id !== deleteId;
        });
        setProducts(filteredProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>ALL Products</h1>
      {products.map((onePt, idp) => {
        return (
          <div key={idp}>
            <ul>
              <li>
                <Link to={"/product/" + onePt._id}>{onePt.productTitle}</Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    DeleteThisProduct(onePt._id);
                  }}
                >
                  Delete
                </button>
              </li>
              <li>
                <Link to={`/product/${onePt._id}/update`}>Update</Link>
              </li>
            </ul>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Dashbord;
