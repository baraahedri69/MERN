import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import OneProduct from './components/OneProduct';
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<Main/>} />
        <Route path="/products/:id" element={<OneProduct/>} />
        <Route path="/:id/edit" element={<UpdateProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
