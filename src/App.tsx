import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/layouts/Header';
import AppProvider from './provider/AppProvider';

const App = () => {
  return (
    <>
      <Switch>
        <AppProvider>
          <Header />
          <Route exact path="/" component={Home} />
        </AppProvider>
      </Switch>
    </>
  );
};
export default App;
