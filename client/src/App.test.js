import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  <Provider>
    ReactDOM.render(<App />, div);
  </Provider>
  ReactDOM.unmountComponentAtNode(div);
});
