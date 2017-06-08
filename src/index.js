import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'; 
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
// import routes from './routes';


const reducer = combineReducers({
    //... // your reducers here
    routing: routerReducer,
});
const history = createHistory();

const middleware = [routerMiddleware(history), thunkMiddleware];

const store = createStore(reducer, undefined, compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
  ));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Switch>
            <Route path="/" component={App}  />
        </Switch>
    </ConnectedRouter>
  </Provider>, document.getElementById('root')
);


