// import logo from './logo.svg';
import './App.css';
import {Route , Router, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import React, { Fragment } from 'react';
import HomePage from './pages/HomePage/HomePage';
import routes from './routes/routes';
export const history = createBrowserHistory ();

function App() {
  return (
      <Router history={history}>
        <Switch>
          {routes.map((route, index) => {
            return <Route key={index} exact={route.exact} path={route.path} component={route.component}/>
          })}
        </Switch>
      </Router>
  );
}

export default App;
