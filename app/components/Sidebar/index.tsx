import * as React from 'react';

export default class Sidebar extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <aside className="ngel-layout__sidebar">
        <nav>
          <ul className="ngel-sidebar-nav">{children}</ul>
        </nav>
      </aside>
    );
  }
}
