import React from 'react';
import 'mdbreact/dist/css/mdb.css';
import Header from './../src/components/header';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Search from './pages/search';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
    </div>
  );
}

export default App;
