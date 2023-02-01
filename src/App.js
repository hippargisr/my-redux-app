import './App.css';
import Home from './Home';
import { useSelector } from 'react-redux';

function App() {
  const {counter} = useSelector( state => state.counter)
  return (
    <div className="App">
      <h1>{counter}</h1>
      <Home/>
    </div>
  );
}

export default App;
