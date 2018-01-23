import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import Sidebar from './index';

describe('Sidebar', () => {
  it('should render the Sidebar component', () => {
    const renderer = new createRenderer();
    renderer.render(<Sidebar />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('aside');
  });
});
