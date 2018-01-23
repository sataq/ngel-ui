"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const shallow_1 = require("react-test-renderer/shallow");
const index_1 = require("./index");
describe('NavBar', () => {
    it('should render the NavBar component', () => {
        const renderer = new shallow_1.createRenderer();
        renderer.render(React.createElement(index_1.default, null));
        const result = renderer.getRenderOutput();
        expect(result).toBeNull();
    });
});
