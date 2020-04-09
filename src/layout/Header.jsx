import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import Home from '../components/Home';
import About from '../components/About';

const Header = () => {
    return (
        <div>
            <h1>Logo</h1>
            <Link to="/home" home={Home} > Home </Link>
            <Link to="/about" about={About} > About </Link>
            <Link to="/contact" contact={Contact} > Contact </Link>
        </div>

    )
}

export default Header;