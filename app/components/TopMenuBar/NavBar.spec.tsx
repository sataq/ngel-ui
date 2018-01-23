import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import NavBar from './index';

describe('NavBar', () => {
  it('should render the NavBar component', () => {
    const renderer = new createRenderer();

    renderer.render(<NavBar />);
    const result = renderer.getRenderOutput();
    expect(result).toBeNull();
  });
});
