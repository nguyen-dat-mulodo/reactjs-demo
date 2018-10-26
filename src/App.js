import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./pages/Home/index";
import Menu from "./pages/Partials/banner";
import Slider from "./pages/Partials/slide";
import Signin from "./pages/Authentication/Signin";
// import Hello from './pages/Home/index';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className={'container'}>
          <Slider/>
          <Menu/>
          <Signin/>
          <Content name={"this is content of page"}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
