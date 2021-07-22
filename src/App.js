import React from 'react';
import './App.css';
import Homepage from './page/homepage/Homepage.js';
import { Route,Switch } from 'react-router-dom';
import ShopComponent from './components/ShopComponent';
import Header from './components/Header';
import SignInSignUp from './components/SignInSignUp';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header />
       <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopComponent} />
        <Route path='/signin' component={SignInSignUp} />

      </Switch>
    </div>
  );
}

export default App;
