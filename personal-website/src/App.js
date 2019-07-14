import React from "react";
// Navigation
import {Route, Switch} from "react-router-dom";
// Pages
import Homepage from './Pages/Homepage';
// Styles
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <Switch>
      <Route exact path="/" component={Homepage}/>
    </Switch>
  )
}

export default App;