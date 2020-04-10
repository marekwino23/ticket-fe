import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Header from './layout/Header';
import logo from './logo.svg';
import './App.css';




function App() {
  const [data, SetData] = useState([]);

   const getPlaces = async () => {
    const records = await fetch("http://localhost:3000/miejsca")
   .then(res => res.json());
   SetData(records);
  }

  useEffect(() => {
    getPlaces();
  }, [])
  console.log('data: ', data);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
      </Switch>
      {/* <p> <Main/> </p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {data.length ? data.map(r => (
          <p key={r.miejsce_id}>{r.miejsce_id} {r.sala_id} {r.fotele_id}</p>
        )) : 'no data'}
      </header> */}
      
    </div>
  );
}

export default App;
