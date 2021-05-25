import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/layouts/Header';
import AppProvider from './provider/AppProvider';
import Checkout from './components/checkout/Checkout';

const App = () => {
  return (
    <>
      <Switch>
        <AppProvider>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={Checkout} />
        </AppProvider>
      </Switch>
    </>
  );
};
export default App;
