import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import Login from './pages/LoginPage';
import Create from './pages/CreatePage';


function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route path="/login" component={Login} />
        <Route path="/create" component={Create} />
      <Redirect from="/" to="/admin/index" />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
