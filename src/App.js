import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  )
}

export default App;
