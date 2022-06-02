import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import HomePage from './pages/HomePage/HomePage';

export const history = createBrowserHistory();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>
      Rô
    </Router>
  );
}

export default App;
