import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/profile';
import Payments from './components/payments';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './layout/header';
import Detail from './pages/detail';
import './App.css'


function App() {

  useEffect(() => {
    return () => sessionStorage.clear();
  })

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/about" component={About} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/pay" component={Payments} />
        <PrivateRoute exact path="/:id" component={Detail} />
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
