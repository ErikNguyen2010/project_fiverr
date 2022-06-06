import logo from './logo.svg';
import './App.css';
import {Router, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import { Fragment } from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Personal from './pages/Personal/Personal';
import Dashboard from './pages/Dashboard/Dashboard';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Loading from './components/Loading/Loading';

export const history = createBrowserHistory();
function App() {
  return (
   <Router history={history}>
     <Loading/>
     <Switch>
        <HomeTemplate exact path="/home" component={Home}/>
        <HomeTemplate exact path="/login" component={Login}/>
        <HomeTemplate exact path="/register" component={Register}/>
        <HomeTemplate exact path="/personal" component={Personal}/>
        <HomeTemplate exact path="/" component={Home}/>
     </Switch>
   </Router>
  );
}

export default App;
