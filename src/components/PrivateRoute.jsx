import React, { useEffect, useState } from 'react';
import { useLocation, Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ path, component: Component }) => {
    const verifyToken = async () => {
        let res;
        try {
            res = await fetch(`${process.env.REACT_APP_API}/verify`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            withCredentials: true,
            });

            if(res.status > 300) setLoggedIn(false);
            else setLoggedIn(true);
        } catch(error) {
            console.error('error: ', error);
        }
    };

    const location = useLocation();
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        verifyToken();
    }, [location]);

    console.log('path: ', path, loggedIn);

    return (
        loggedIn ? <Route path={path} component={Component} /> : <Redirect to="/login" />
    )
}

export default PrivateRoute;