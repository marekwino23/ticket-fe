import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import Home from '../components/Home';
import About from '../components/About';
import Login from '../components/Login';
import obrazek from '../bars-solid.svg';


const Header = () => {
    return (
        <div>
            <ul>
                <li><Link> <img src={obrazek}></img> </Link></li>
           <li> <Link to="/home" home={Home} > Sprawdz Repertuar </Link> </li>
           <li> <Link to="/about" about={About} > Zarezerwuj Bilet </Link> </li>
           <li> <Link to="/contact" contact={Contact} > Panel Lojalnościowy </Link> </li>
           <li> <Link to="/login" login={Login} > Zarejestruj się/Logowanie </Link> </li>
           </ul>
        </div>

    )
}

export default Header;