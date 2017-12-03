import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { Home, Search, Mine, Tech, Contact } from "./Screens";



const Index = ({store}) => (  
  // <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={ Home } />
        <Route path="/Search" component={ Search } />
        <Route path="/Mine" component={ Mine } />
        <Route path="/Tech" component={ Tech } />
        <Route path="/Contact" component={ Contact } />
      </Switch>
    </Router>
    // </Provider>
);


  render(

    <Index />,
    document.getElementById('root'));

