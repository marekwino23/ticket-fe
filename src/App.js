import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Header from './layout/Header';
import logo from './logo.svg';
import './App.css';




function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/about" component={About} />
        <PrivateRoute path="/contact" component={Contact} />
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
