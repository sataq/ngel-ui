"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Content extends React.Component {
    render() {
        const { children } = this.props;
        return React.createElement("section", { className: "ngel-layout__content" }, children);
    }
}
exports.default = Content;
