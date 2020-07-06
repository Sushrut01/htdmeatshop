import React from 'react';
import './App.css';
import Home from './pages/Home';
import Items from './pages/Items';
import About from './pages/About';
import Contact from './pages/Contact';
import SingleItem from './pages/SingleItem';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/items/" component={Items}/>
      <Route exact path="/about/" component={About}/>
      <Route exact path="/contact/" component={Contact}/>
      <Route exact path="/singleItem/:slug" component={SingleItem}/>
      <Route component={Error}/>
    </Switch>
    </div>
  );
}

export default App;
