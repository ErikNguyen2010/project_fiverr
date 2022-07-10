// import logo from './logo.svg';
import './App.css';
import {Route , Router, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import React, { Fragment, useEffect } from 'react';
import routes from './routes/routes';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Personal from './pages/Personal/Personal';

import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';

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
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
      <Router history={history}>
        <Switch>
        {/* <HomeTemplate exact path="/home" component={Home}/> */}
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



        {/* <HomeTemplate exact path="/" component={Home}/> */}
          {routes.map((route, index) => {
            return <Route key={index} exact={route.exact} path={route.path} component={route.component}/>
          })}
        </Switch>
      </Router>
  );
}

export default App;
