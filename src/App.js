import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import CataloguePage from './pages/cataloguepage/cataloguepage.components';
import Header from './components/header/header.component';
import Poems from './pages/categorypages/poems/poems.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component{

  constructor(){
    super();
    this.state ={
      currentUser:null
    }

  }

  unsubscribeFromAuth = null;

  componentDidMount(){
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({ currentUser:user })
      })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="">
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route  exact path='/audio-catalogue' component={CataloguePage} />
          <Route exact path='/audio-catalogue/poems' component={Poems} />
          <Route exact path='/signin' component={SignInPage} />
        </Switch>
      </div>
    )
  }

}

export default App;
