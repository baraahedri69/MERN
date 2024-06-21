import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductForm from './components/ProductForm';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<ProductForm />} />
      </Routes>
    </div>
  );
}

export default App;
