import React from 'react';
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import Contact from './container/Contact/Contact';

const App = () => (
  <Router>
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Contact />
    <Footer />
  </div>
  </Router>
);

export default App;