import API from './utils/API/API'
import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Searchbox from './components/Searchbox/Searchbox';
import Well from './components/Well/Well';
import Nav from './components/Nav/Nav';
import Saved from './pages/Saved/Saved';
import Search from './pages/search/Search';
import NoMatch from './pages/NoMatch/NoMatch';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/home" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved/" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

}

export default App;