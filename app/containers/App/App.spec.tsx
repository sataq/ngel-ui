import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { App } from './index';
import Sidebar from '../../components/Sidebar';
import NavBar from '../../components/TopMenuBar';
import MainLayout from '../../components/MainLayout';

describe('App Container', () => {
  it('should render the App container', () => {
    const renderer = new createRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();

    expect(result[0].type).toBe(NavBar);
    expect(result[1].type).toBe(MainLayout);
  });
});
