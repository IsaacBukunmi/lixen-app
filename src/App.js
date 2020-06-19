import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import CataloguePage from './pages/cataloguepage/cataloguepage.components';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/catalogue' component={CataloguePage} />
      </Switch>
    </div>
  );
}

export default App;
