import React from 'react';
import './App.css';
import Homepage from './page/homepage/Homepage.js';
import { Route,Switch } from 'react-router-dom';
import ShopComponent from './components/ShopComponent';
import Header from './components/Header';
import SignInSignUp from './components/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';



class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

   componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
      
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot=>{
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        },()=>{console.log(this.state);})

      })
      }
      this.setState({currentUser: userAuth});

    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  
  render(){
    return (
      <div className="App">
          <Header currentUser={this.state.currentUser} />

         <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopComponent} />
          <Route path='/signin' component={SignInSignUp} />
  
        </Switch>
      </div>
    );
  }
  
}

export default App;
