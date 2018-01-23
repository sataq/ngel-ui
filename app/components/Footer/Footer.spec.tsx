import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import Footer from './index';
const renderer = new createRenderer();

describe('Footer', () => {
  it('should render the Footer component', () => {
    renderer.render(<Footer />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('footer');
  });
});
