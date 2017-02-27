/*eslint-disable import/default*/
//disable eslint complaining about importing the 'configureStore' function with it not being exported as default
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
//import configureStore from './store/configureStore'; //can be un-commented once store is implemented
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/index.scss';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/tether/dist/js/tether.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

//const store = configureStore();
//can be un-commented once store is implemented.

render(
  //<Provider store={store}>
      //Provider can be un-commented once store is implemented
    <Router history={browserHistory} routes={routes}/>, document.getElementById('app')
  //</Provider>
);