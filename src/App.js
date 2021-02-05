/** @format */

import React from "react";
import BottomNavbarDrawer_ from "./components/BottomNavbarDrawer_";
import MovieRoom_ from "./pages/MovieRoom_";
import LoginPage_ from "./pages/LoginPage_";
import SingUpPage_ from "./pages/SingUpPage_";
import DashboardPage_ from "./pages/DashboardPage_";
import "./styles/base.css";
import CategoryPage_ from "./pages/CategoryPage_";
// import logo from './logo.svg';

function App_() {
  return (
    <div className='App'>
      <BottomNavbarDrawer_ />
      <DashboardPage_ />
      {/* <CategoryPage_ /> */}
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
