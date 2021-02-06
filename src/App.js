/** @format */

import React from "react";
import BottomNavbarDrawer_ from "./components/BottomNavbarDrawer_";
import MovieRoom_ from "./pages/MovieRoom_";
import LoginPage_ from "./pages/LoginPage_";
import SingUpPage_ from "./pages/SingUpPage_";
import DashboardPage_ from "./pages/DashboardPage_";
import "./styles/base.css";
import CategoryPage_ from "./pages/CategoryPage_";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import logo from './logo.svg';

function App_() {
  return (
    <Router>
      <Switch>
        <div className='App'>
          <BottomNavbarDrawer_ />
          <Route exact path='/'>
            <DashboardPage_ />
          </Route>
          <Route
            exact
            path='/category/:id'
            render={(props) => (
              <CategoryPage_ category_={props.match.params.id} />
            )}
          />
          <Route exact path='/room'>
            <MovieRoom_ />
          </Route>
          <Route exact path='/login'>
            <LoginPage_ />
          </Route>
          <Route exact path='/signup'>
            <SingUpPage_ />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <div>
      <App_ />
    </div>
  );
}

export default App;
