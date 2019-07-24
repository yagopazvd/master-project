import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/Shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp.component'
import Header from './components/header/Header.component';
import { auth } from './firebase/firebase.utils';



class App extends Component {

  state = {
    currentUser: null
  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
     this.setState({currentUser: user});
   })
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;
