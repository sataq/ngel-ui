import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface ISidebarProps {
  to: string;
}

export default class SidebarItem extends React.Component<ISidebarProps, any> {
  static defaultProps: ISidebarProps = {
    to: '#',
  };

  render() {
    const { to, children } = this.props;
    return (
      <li className="ngel-sidebar-nav__item">
        <NavLink to={to} exact={true} className={'ngel-sidebar-nav__link'} activeClassName={'ngel-sidebar-nav__link--active'}>
          {children}
        </NavLink>
      </li>
    );
  }
}
