import logo from './logo.svg';
import './App.css';
import {Router, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import { Fragment } from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Personal from './pages/Personal/Personal';


export const history = createBrowserHistory();
function App() {
  return (
   <Router history={history}>
     <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/personal" component={Personal}/>
     </Switch>
   </Router>
  );
}

export default App;
