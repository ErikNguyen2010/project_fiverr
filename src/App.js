import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Fragment } from 'react';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route excat path={'/'} render={(propsRoute)=>{
          return <Fragment>
              
          </Fragment>
        }}/>
      </Switch>
    </Router>
  );
}

export default App;
