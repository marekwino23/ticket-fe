import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Link, useLocation, } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = event => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
  
          handler(event);
        };
  
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
  
        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        };
      },[ref, handler]);
  }

const ProfileMenu = ({ setVisible, visible }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setVisible(v => !v));
    const onClick = () => {
        sessionStorage.removeItem('loggedIn');
        setLoggedIn(false);
    }
 
    return (
        <Menu ref={ref} visible={visible}>
            <li><StyledLink to="/profile">Moje konto</StyledLink></li>
            <li><StyledLink to="/login" onClick={onClick}>Wyloguj</StyledLink></li>
        </Menu>
    )
}


const Menu = styled.ul`
    display: ${({ visible }) => visible ? 'block' : 'none'};
    position: absolute;
    bottom: -7.5rem;
    left: 0;
    margin: 0;
    z-index: 4;
    background-color: rgb(52, 155, 243);
    color: whitesmoke;
    height: 6.5rem;
    width: 12vw;
    text-align: start;
    li {
        margin-bottom: 1rem;
        padding-left: 0;
        &:not(last-child) {
            margin-bottom: 0;
        }
        &:last-child::before {
            content: none !important ;
        }
    }
`

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [visible, setVisible] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const lg = sessionStorage.getItem('loggedIn');
        if(loggedIn == lg) return;
        setLoggedIn(lg);
    },[location]);
    let user = {};
    try {
        user = JSON.parse(sessionStorage.getItem('user'));
    }
    catch {
        user = { name: ''};
    }
    return (
        <nav>
            <List>
                <li><StyledLink to="/"><Icon icon={faHome} /> </StyledLink></li>
                { loggedIn && <li> <StyledLink to="/" > Sprawdz Repertuar </StyledLink> </li>}
                { loggedIn && <li> <StyledLink to="/about" > Zarezerwuj Bilet </StyledLink> </li>}
             <ListItem>
    {loggedIn ? (<Btn onClick={() => setVisible(v => !v)}><Icon icon={faUser} /></Btn>) : <StyledLink to='/login' >Zaloguj sie</StyledLink>} 
    {loggedIn && <ProfileMenu setVisible={setVisible} visible={visible} /> }
            </ListItem>
            { !loggedIn && <ListItem><StyledLink to="/register" > Zarejestruj sie </StyledLink></ListItem>}
           </List>
        </nav>
    )
}

const Btn = styled.button`
    border: none;
    background-color: inherit;
    outline: none;
    border-radius: 50%;
    padding: 1rem;
    cursor: pointer;
`

const Icon = styled(FontAwesomeIcon)`
    font-size: 1.5rem;
    color: white;
`

const List = styled.ul`
    overflow: visible;
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
    position: relative;
    justify-self: flex-end;
`;

const StyledLink = styled(Link)`
    text-transform: uppercase;
    letter-spacing: 1.5px;
    display: block;
    &:hover {
        background-color: #0088ff;
    }
`;

export default Header;