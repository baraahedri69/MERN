import "./App.css";
import CreateProduct from "./components/CreateProduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashbord from "./components/Dashbord";
import OneProducts from "./components/OneProducts";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Router>
        <Routes>
          {/* List out all the products */}
          <Route path="/" element={<Dashbord />} />
          {/* create a product */}
          <Route path="/product/create" element={<CreateProduct />} />
          <Route path="/product/:id" element={<OneProducts />} />
          {/* Update  */}
          <Route path="/product/:id/update" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
