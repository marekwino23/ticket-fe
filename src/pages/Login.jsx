import React, { useState } from 'react';
import cogoToast from 'cogo-toast';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Login = () =>{   

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');

const history = useHistory();

const onChange = ({ target }) => {
  target.name === "email" ? setEmail(target.value) : setPassword(target.value);
}

  const onSubmit = async (e) => {
    e.preventDefault();
    let res;
    try {
      setLoading(true);
    res = await fetch(`${process.env.REACT_APP_API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    });
    setLoading(false);
    console.log('res: ', res);
    if(res.status > 300 ) return;
    sessionStorage.setItem('loggedIn', true);
    history.push('/');
    } catch(error) {
      setError(error.message);
    }
  }

  if(loading && !error) return <div>loading...</div>
 return(
<Container>
<form onSubmit={onSubmit}>
  <h1>Logowanie</h1>
  <label> Podaj Emaila:
  <input name="email" value={email} onChange={onChange} type="text"/>
  </label>
  <label> Podaj Hasło:
  <input name="password" value={password} onChange={onChange} type="text"/>
  </label>
  <Btn>Log in</Btn>
</form>
    </Container>

 )
}

const Container = styled.div` 
  form {
    width: 40rem;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    label, button {
      display: block;
      text-align: center;
      width: 100%;
    }
    label input {
      width: 100%;
    }
    button {
      margin-top: 1rem;
    }
  }
`

const Btn = styled.button`   
  border: none;
  padding: 1rem 2rem;
  background-color: #349bf3;
  box-shadow: 1px 2px 10px rgba(25,25,25,.4);
  display: flex;
  color: #f5f5f5;`

export default Login;