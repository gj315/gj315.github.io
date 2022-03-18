import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
function App() {
  return (
    <Switch>
    <Route path="/" exact>
    <HomePage />
    </Route>
    </Switch>
      
  );
}

export default App;
