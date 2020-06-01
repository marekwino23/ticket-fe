import React, { useReducer, useState } from 'react';
import cogoToast from 'cogo-toast';
import { useHistory } from 'react-router-dom';
import {Btn ,Container, Form} from '../styled';
import logo from '../logo.svg';

const initial = { loading: false, error: '' };

const appReducer = (state = initial, action) => {
  switch(action.type) {
    case 'LOADING': return {...state, loading: action.payload}
    case 'ERROR': return {...state, error: action.payload}
    default: return state;
  }
}

const validateFields = (fields) => {
  const error = {};
  Object.keys(fields).forEach(k => {
    if(fields[k] === '') error[fields[k]] = 'is required'
  });
  return error;
}

const Login = () =>{   

  const [state, dispatch] = useReducer(appReducer);
  const [error, setError] = useState({ email: '', password: ''});

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const history = useHistory();

const onChange = ({ target }) => {
  if(!target.value) setError(prev => ({...prev, [target.name]: 'field is required' }));
  target.name === "email" ? setEmail(target.value) : setPassword(target.value);
}

  const onSubmit = async (e) => {
    e.preventDefault();
    // const v = validateFields({ email, password });
    // console.log('v: ', v);
    // if(v) {
    //   setError(v);
    //   return;
    // } 

    let res;
    try {
      dispatch({ type: 'LOADING', payload: true });
    res = await fetch(`${process.env.REACT_APP_API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    });
    dispatch({ type: 'LOADING', payload: false });
    console.log('res: ', res);
    if(res.status > 300 ) return;
    sessionStorage.setItem('loggedIn', true);
    const data = await res.json();
    sessionStorage.setItem('user', JSON.stringify(data.user));
    history.push('/');
    } catch(error) {
      dispatch({ type: 'ERROR', payload: true });
    }
  }

  if(state && state.loading && !state.error) return <img src={logo} className="App-logo" alt="logo" />
  console.log('error: ', error);
  
 return(
<Container>
<Form onSubmit={onSubmit}>
  <h1>Logowanie</h1>
  <label> Podaj Emaila:
  <input name="email" value={email} onChange={onChange} type="text"/>
  {!email && error.email}
  </label>
  <label> Podaj Hasło:
  <input name="password" value={password} onChange={onChange} type="password"/>
  {!password && error.password}
  </label>
  <Btn disabled={!Object.values(error).includes('') || !email || !password}>Log in</Btn>
</Form>
    </Container>

 )
}

export default Login;