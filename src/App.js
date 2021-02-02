/** @format */

import React from "react";
import BottomNavbarDrawer_ from "./components/BottomNavbarDrawer_";
import MovieRoom_ from "./pages/MovieRoom_";
import LoginPage_ from "./pages/LoginPage_";
import SingUpPage_ from "./pages/SingUpPage_";
import DashboardPage_ from "./pages/DashboardPage_";

// import logo from './logo.svg';

function App_() {
  return (
    <div className='App'>
      thanks GOD
      <BottomNavbarDrawer_ />
      <DashboardPage_ />
      <LoginPage_ />
      <SingUpPage_ />
      <MovieRoom_ />
    </div>
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
