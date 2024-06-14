import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import People from './components/People';
import Planet from './components/Planet';

function App() {
  return (
    <BrowserRouter>
      <Form />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planet/:id" element={<Planet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;