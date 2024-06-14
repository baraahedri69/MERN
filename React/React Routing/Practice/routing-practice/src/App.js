import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Number from './components/Number';
import HelloBlueRed from './components/HelloBlueRed';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path = '/home' element = {<Home/>}/>
          <Route path = '/:num' element = {<Number />}/>
          <Route path = '/:num/:color/:background' element = {<HelloBlueRed/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;