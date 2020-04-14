import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';
import obrazek from '../bars-solid.svg';


const Header = () => {
    return (
        <div>
            <ul>
                <li><Link> <img src={obrazek}></img> </Link></li>
           <li> <Link to="/home" home={Home} > Sprawdz Repertuar </Link> </li>
           <li> <Link to="/about" about={About} > Zarezerwuj Bilet </Link> </li>
           <li> <Link to="/contact" contact={Contact} > Panel Lojalnościowy </Link> </li>
           <li> <Link to="/login" login={Login} > Logowanie </Link> </li>
           <li> <Link to="/register" register={Register} > Rejestracja </Link> </li>
           </ul>
        </div>

    )
}

export default Header;