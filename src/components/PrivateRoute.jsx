import React, {useState } from 'react';
import {Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ exact, path, component: Component }) => {
    // const verifyToken = async () => {
    //     let res;
    //     try {
    //         res = await fetch(`${process.env.REACT_APP_API}/verify`, {
    //         method: 'POST',
    //         mode: 'cors',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         credentials: 'include',
    //         });

    //         if(res.status > 300) setLoggedIn(false);
    //         else setLoggedIn(true);
    //     } catch(error) {
    //         console.error('error: ', error);
    //     }
    // };

    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('loggedIn'));

    // useEffect(() => {
    //     verifyToken();
    // });

    console.log('path: ', path, loggedIn);

    return (
        loggedIn ? <Route exact path={path} component={Component} /> : <Redirect to="/login" />
    )
}

export default PrivateRoute;