import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
       <App />
    </Provider>
  </HashRouter>, document.getElementById('root')
)