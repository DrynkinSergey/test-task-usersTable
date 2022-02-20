import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import App from "./App";
import {rootReducer} from "./redux/rootReducer";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import AddUser from "./Components/AddUser/AddUser";
import EditUser from "./Components/EditUser/EditUser";
const store = createStore(rootReducer);
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <Route  path="/test-task-usersTable" component={App}/>
            <Route exact path="/" component={App}/>
            <Route exact path="/addUser" component={AddUser} />
            <Route exact path="/editUser" component={EditUser} />



        </BrowserRouter>
    </Provider>
    ,  document.getElementById('root')
);
