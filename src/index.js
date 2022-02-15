import {Provider} from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import App from "./App";
import {rootReducer} from "./redux/rootReducer";
import {BrowserRouter, Route} from "react-router-dom";
import AddUser from "./Components/AddUser/AddUser";
const store = createStore(rootReducer);
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <Route  path="/home" component={App}/>
            <Route exact path="/" component={App}/>

            <Route  path="/addUser" component={AddUser}/>
        </BrowserRouter>
    </Provider>
    ,  document.getElementById('root')
);
