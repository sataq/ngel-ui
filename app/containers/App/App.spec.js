"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const shallow_1 = require("react-test-renderer/shallow");
const index_1 = require("./index");
const TopMenuBar_1 = require("../../components/TopMenuBar");
const MainLayout_1 = require("../../components/MainLayout");
describe('App Container', () => {
    it('should render the App container', () => {
        const renderer = new shallow_1.createRenderer();
        renderer.render(React.createElement(index_1.App, null));
        const result = renderer.getRenderOutput();
        expect(result[0].type).toBe(TopMenuBar_1.default);
        expect(result[1].type).toBe(MainLayout_1.default);
    });
});
