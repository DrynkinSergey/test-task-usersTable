import React from 'react';
import Table from "./Components/Table/Table";
import './index.css'

import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import AddUser from "./Components/AddUser/AddUser";
function App() {
  return (

    <div className="AppWrapper">
      <Switch>
        <Route  path='/home' component={Table} />
        <Route path='/addUser' component={AddUser} />
          <Redirect from='/' to='/home'/>
      </Switch>

    </div>
  );
}

export default withRouter(App);
