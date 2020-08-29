import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from './Container';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="app">

      <div className="app__navbar">
        <Navbar />
      </div>

      <div className="app__containers">
        <Container />
      </div>

      <div className="app__footer">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
