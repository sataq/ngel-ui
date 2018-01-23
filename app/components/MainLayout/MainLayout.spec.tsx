import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import MainLayout from './index';

describe('MainLayout', () => {
  it('should render the MainLayout component', () => {
    const renderer = new createRenderer();
    renderer.render(<MainLayout />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('main');
  });
});
