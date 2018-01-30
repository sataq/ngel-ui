import * as React from 'react';
import * as ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
import './app.scss';

const store = createStore(applyMiddleware(thunkMiddleware));

const render = function(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer warnings={false}>
          <Component />
        </AppContainer>
      </BrowserRouter>
    </Provider>,
    document.querySelector('.ngel-layout__body')
  );
};

document.addEventListener('DOMContentLoaded', () => {
  render(App);
});

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(require('./containers/App').default);
  });
}
