"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const shallow_1 = require("react-test-renderer/shallow");
const index_1 = require("./index");
const renderer = new shallow_1.createRenderer();
describe('Footer', () => {
    it('should render the Footer component', () => {
        renderer.render(React.createElement(index_1.default, null));
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('footer');
    });
});
