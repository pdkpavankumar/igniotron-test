import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store/noodleStore';
import NoodleList from './NoodleList';
import NoodleDetail from './NoodleDetail';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const NoodleApp = () => {
  return (
    <>
      <ReduxProvider store={store}>
        <Router>
          <Route path="/" exact>
            <NoodleList />
          </Route>
          <Route path="/item/:id" exact>
            <NoodleDetail />
          </Route>
        </Router>
      </ReduxProvider>
    </>
  )
}

export default NoodleApp;