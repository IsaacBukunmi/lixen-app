import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import CataloguePage from './pages/cataloguepage/cataloguepage.components';
import Header from './components/header/header.component';
import Poems from './pages/categorypages/poems/poems.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';

function App() {
  return (
    <div className="">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route  exact path='/catalogue' component={CataloguePage} />
        <Route path='/catalogue/poems' component={Poems} />
        <Route path='/signin' component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
