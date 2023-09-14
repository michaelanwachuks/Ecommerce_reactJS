import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './pages/Store';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

function App() {
  return (
    <div className="App">
       <NavigationBar />
        <BrowserRouter>
        <Routes>
          <Route index element={<Store />} />
          <Route path='/Success' element={<Success />} />
          <Route path='/Cancel' element={<Cancel />} />
            
           
        </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
