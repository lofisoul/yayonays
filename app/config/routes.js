//load up react and react router
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'; 

//grab pages
import Yayonays from '../pages/Yayonays';
// import Login from '../pages/Login';
// import Signup from '../pages/Signup';

module.exports = (
  <Router>
    <Route path="/" component={Yayonays}>
    {/*<IndexRoute component={Yayonays}/>*/}
    {/*Should look like this -----
    <IndexRoute component={Login}/>
    <Route path="/" component={Yayonays}>
    <Route path="/signup" component={Signup}>
    <Route path="/" component={Yayonays}>
    -----*/}
    </Route>
  </Router>
);
