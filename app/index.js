"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const redux_thunk_1 = require("redux-thunk");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const react_router_dom_1 = require("react-router-dom");
const react_hot_loader_1 = require("react-hot-loader");
const App_1 = require("./containers/App");
require("./app.scss");
const store = redux_1.createStore(redux_1.applyMiddleware(redux_thunk_1.default));
const render = Component => {
    ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_hot_loader_1.AppContainer, { warnings: false },
                React.createElement(Component, null)))), document.querySelector('.ngel-layout__body'));
};
document.addEventListener('DOMContentLoaded', () => {
    render(App_1.default);
});
if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render(require('./containers/App').default);
    });
}
