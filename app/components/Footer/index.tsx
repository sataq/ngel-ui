import * as React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="ngel-layout__footer">
        <div className="ngel-layout__footer-text">
          Copyright © <span id="js-ngel-layout__trademark-year">{new Date().getFullYear()}</span>, Ngel Sataq<br />
          <br />
          <span className="ngel-layout__footer-app-name">Ngel Maps UI</span>
        </div>
      </footer>
    );
  }
}
