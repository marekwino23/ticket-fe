import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import cogoToast from 'cogo-toast';
import styled from 'styled-components';


const Register = () =>{   
  const history = useHistory();
  const location = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  

  const onChange = ({ target }) => {
    target.name === "name" ? setName(target.value):
    target.name === "email" ? setEmail(target.value) : setPassword(target.value);
  }
  
    const onSubmit = async (e) => {
      e.preventDefault();
      let res;
      try {
        setLoading(true);
      res = await fetch(`${process.env.REACT_APP_API}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password })
      });
      setLoading(false);
      console.log('res: ', res);
      if(res.status > 300 ) return;
      const data = await res.json();
      data.status === 'success' && cogoToast.success('user was successfully creaed. You can now log in', {
        timeout: 500
      });
      history.push('/login');
      } catch(error) {
        setError(error.message);
      }
    }
  
   !loading && error && cogoToast.error(`registration error: ${error}`, {
     timeout: 500
   });
    if(loading && !error) return <div>loading...</div>
   return(
    <Container>
    <form onSubmit={onSubmit}>
    <label>Podaj Imie i Nazwisko:
       <input name="name" value={name} onChange={onChange} type="text"/>
      </label>
      <label>Podaj Emaila:
      <input name="email" value={email} onChange={onChange} type="text"/>
      </label>
      <br></br>
      <label>Podaj Hasło:
      <input name="password" value={password} onChange={onChange} type="text"/>
      </label>
      <Btn>Register</Btn>
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

    export default Register;



