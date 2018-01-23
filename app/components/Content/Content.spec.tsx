import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import Content from './index';

describe('Content', () => {
  it('should render the Footer component', () => {
    const renderer = new createRenderer();
    renderer.render(<Content />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('section');
  });
});
