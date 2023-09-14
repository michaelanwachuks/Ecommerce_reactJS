import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
       <NavigationBar />
       <h1>Welcome to our Store</h1>
       <hr/>
    </div>
  );
}

export default App;
