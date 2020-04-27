import React from 'react';
import { Link } from 'react-router-dom';
import obrazek from '../home-solid.svg';
import styled from 'styled-components';

const Header = () => {
    const loggedIn = sessionStorage.getItem('loggedIn');
    return (
        <nav>
            <List>
                <li><StyledLink> <img class="home" src={obrazek}></img> </StyledLink></li>
                <li> <StyledLink to="/home" > Sprawdz Repertuar </StyledLink> </li>
                <li> <StyledLink to="/about" > Zarezerwuj Bilet </StyledLink> </li>
                <li> <StyledLink to="/contact" > Panel Lojalnościowy </StyledLink> </li>
            { loggedIn &&  <ListItem><StyledLink to="/login" > Zaloguj sie </StyledLink> </ListItem>}
            { !loggedIn && <ListItem><StyledLink to="/logout" > Wyloguj sie </StyledLink> </ListItem> }
            { loggedIn && <ListItem><StyledLink to="/register" > Zarejestruj sie </StyledLink></ListItem>}
           </List>
        </nav>
    )
}

const List = styled.ul`
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