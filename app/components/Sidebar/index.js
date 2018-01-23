"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Sidebar extends React.Component {
    render() {
        const { children } = this.props;
        return (React.createElement("aside", { className: "ngel-layout__sidebar" },
            React.createElement("nav", null,
                React.createElement("ul", { className: "ngel-sidebar-nav" }, children))));
    }
}
exports.default = Sidebar;
