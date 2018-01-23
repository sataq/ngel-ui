"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Footer extends React.Component {
    render() {
        return (React.createElement("footer", { className: "ngel-layout__footer" },
            React.createElement("div", { className: "ngel-layout__footer-text" },
                "Copyright \u00A9 ",
                React.createElement("span", { id: "js-ngel-layout__trademark-year" }, new Date().getFullYear()),
                ", Ngel Sataq",
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("span", { className: "ngel-layout__footer-app-name" }, "Ngel Maps UI"))));
    }
}
exports.default = Footer;
