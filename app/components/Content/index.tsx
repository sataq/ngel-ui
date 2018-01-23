import * as React from 'react';

export default class Content extends React.Component {
  render() {
    const { children } = this.props;
    return <section className="ngel-layout__content">{children}</section>;
  }
}
