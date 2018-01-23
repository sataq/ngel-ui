import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../Home';
import Footer from '../../components/Footer';
import MainLayout from '../../components/MainLayout';
import TopMenuBar from '../../components/TopMenuBar';
import 'react-dates/initialize';

export class App extends React.Component<any, any> {
  render() {
    return [
      <TopMenuBar key={'navbar'} />,
      <MainLayout key={'main-layout'}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
        </Switch>
        <Footer />
      </MainLayout>,
    ];
  }
}

export default withRouter(App);
