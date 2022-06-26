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
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';

import Users from './pages/Admin/Users/Users'
import AddUser from './pages/Admin/Users/AddUser'
import EditUser from './pages/Admin/Users/EditUser'


import Gig from './pages/Admin/Gig/Gig';
import EditGig from './pages/Admin/Gig/EditGig';
import AddGig from './pages/Admin/Gig/AddGig';
import EditImg from './pages/Admin/Gig/EditImg';
import UserInfo from './pages/Admin/Users/UserInfo';


export const history = createBrowserHistory();
function App() {
  return (
   <Router history={history}>
     <Loading/>
     <Switch>
        <HomeTemplate exact path="/home" component={Home}/>
        <HomeTemplate exact path="/login" component={Login}/>
        <HomeTemplate exact path="/register" component={Register}/>
        <HomeTemplate exact path="/personal/:id" component={Personal}/>

        <AdminTemplate path="/admin/user" exact component={Users} />
        <AdminTemplate path="/admin/user/infouser/:id" exact component={UserInfo} />
        <AdminTemplate path="/admin/user/adduser" exact component={AddUser} />
        <AdminTemplate path="/admin/user/edituser/:id" exact component={EditUser} />



        <AdminTemplate path="/admin/gig" exact component={Gig} />
        <AdminTemplate path="/admin/gig/editgig/:id" exact component={EditGig} />
        <AdminTemplate path="/admin/gig/addgig" exact component={AddGig} />
        <AdminTemplate path="/admin/gig/editimg/:id" exact component={EditImg} />



        <HomeTemplate exact path="/" component={Home}/>

        
     </Switch>
   </Router>
  );
}

export default App;
