import './App.css';
import { Route, Link } from 'react-router-dom';
import Main from './Main';
import About from './About';

function App() {
  return (
    <div className="App">
			<Route exact path="/" component={Main} />
			<Route exact path="/about" component={About} />
    </div>
  )
}

export default App;
