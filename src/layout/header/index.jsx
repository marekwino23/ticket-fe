import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import obrazek from '../../home-solid.svg';
import styled from 'styled-components';


const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    // const {state} = useLocation();
    useEffect(() => {
        setLoggedIn(sessionStorage.getItem('loggedIn'))
    });
    // useEffect(() => {
    //     if(sessionStorage.getItem('loggedIn') === loggedIn) return;
    //     // if(!state) return;
    //     // console.log('location state: ', state);
    //     setLoggedIn(sessionStorage.getItem('loggedIn') ? true : false);
    //     // sessionStorage.setItem('loggedIn', state.loggedIn);
    // },[loggedIn]);
    const onClick = () => {
        sessionStorage.removeItem('loggedIn');
        setLoggedIn(false);
    }
    console.log('loggedIn: ', loggedIn);
    return (
        <nav>
            <List>
                <li><StyledLink to="/"><img class="home" src={obrazek}></img> </StyledLink></li>
                { loggedIn && <li> <StyledLink to="/" > Sprawdz Repertuar </StyledLink> </li>}
                { loggedIn && <li> <StyledLink to="/about" > Zarezerwuj Bilet </StyledLink> </li>}
               { loggedIn && <li> <StyledLink to="/contact" > Panel Użytkownika </StyledLink> </li>}
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