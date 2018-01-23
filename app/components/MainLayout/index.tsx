import * as React from 'react';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return <main className="ngel-layout__main">{children}</main>;
  }
}
