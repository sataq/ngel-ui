"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
class SidebarItem extends React.Component {
    render() {
        const { to, children } = this.props;
        return (React.createElement("li", { className: "ngel-sidebar-nav__item" },
            React.createElement(react_router_dom_1.NavLink, { to: to, exact: true, className: 'ngel-sidebar-nav__link', activeClassName: 'ngel-sidebar-nav__link--active' }, children)));
    }
}
SidebarItem.defaultProps = {
    to: '#',
};
exports.default = SidebarItem;
