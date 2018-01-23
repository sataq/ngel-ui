import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import SidebarItem from './index';

describe('SidebarItem', () => {
  it('should render the SidebarItem component', () => {
    const renderer = new createRenderer();
    renderer.render(<SidebarItem to="/mock">Test</SidebarItem>);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('li');
  });
});
