"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const Home_1 = require("../Home");
const Footer_1 = require("../../components/Footer");
const MainLayout_1 = require("../../components/MainLayout");
const TopMenuBar_1 = require("../../components/TopMenuBar");
require("react-dates/initialize");
class App extends React.Component {
    render() {
        return [
            React.createElement(TopMenuBar_1.default, { key: 'navbar' }),
            React.createElement(MainLayout_1.default, { key: 'main-layout' },
                React.createElement(react_router_dom_1.Switch, null,
                    React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Home_1.default })),
                React.createElement(Footer_1.default, null)),
        ];
    }
}
exports.App = App;
exports.default = react_router_dom_1.withRouter(App);
