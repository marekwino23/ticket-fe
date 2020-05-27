import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import obrazek from '../../home-solid.svg';
import styled from 'styled-components';


const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const lg = sessionStorage.getItem('loggedIn');
        if(loggedIn == lg) return;
        setLoggedIn(lg);
        return () => sessionStorage.clear();
    },[location]);
    const onClick = () => {
        sessionStorage.removeItem('loggedIn');
        setLoggedIn(false);
    }
    const user = sessionStorage.getItem('user');
    return (
        <nav>
            <List>
                <li><StyledLink to="/"><img className="home" src={obrazek}></img> </StyledLink></li>
                { loggedIn && <li> <StyledLink to="/" > Sprawdz Repertuar </StyledLink> </li>}
                { loggedIn && <li> <StyledLink to="/about" > Zarezerwuj Bilet </StyledLink> </li>}
               { loggedIn && <li> <StyledLink to="/contact" > Panel Użytkownika: {user.name} </StyledLink> </li>}
               <br></br>
            { !loggedIn &&  <ListItem><StyledLink to="/login" > Zaloguj sie </StyledLink> </ListItem>}
            { loggedIn && <ListItem><StyledLink to="/login" onClick={onClick} > Wyloguj sie </StyledLink> </ListItem> }
            { !loggedIn && <ListItem><StyledLink to="/register" > Zarejestruj sie </StyledLink></ListItem>}
           </List>
        </nav>
    )
}

const List = styled.ul`
    background-color: #349bf3;
    display: flex;
    align-items: center;
    padding: 1rem 0;
    li {
        &:nth-child(4) {
            margin-right: auto;
        }
        &:last-child {
            position: relative;

            &::before {
                content: '/';
                display: block;
                position: absolute;
                color: #fff;
                font-size: 2rem;
                font-weight: 300;
                left: - 1.2rem;
                bottom: .6rem;
            }
        }
    }
`;

const ListItem = styled.li`
    justify-self: flex-end;
`;

const StyledLink = styled(Link)`
    text-transform: uppercase;
    letter-spacing: 1.5px;
`;

export default Header;