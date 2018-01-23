"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class MainLayout extends React.Component {
    render() {
        const { children } = this.props;
        return React.createElement("main", { className: "ngel-layout__main" }, children);
    }
}
exports.default = MainLayout;
