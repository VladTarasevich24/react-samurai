import React from 'react';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App/>
            </Provider>

        </BrowserRouter> , document.getElementById('root')

    );
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state);
});








