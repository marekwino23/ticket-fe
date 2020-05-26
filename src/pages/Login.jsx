import React, { useState } from 'react';
import cogoToast from 'cogo-toast';
import { useHistory } from 'react-router-dom';

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
    console.log(sessionStorage);
    history.push('/');
    } catch(error) {
      setError(error.message);
    }
  }

  if(loading && !error) return <div>loading...</div>
 return(
<div>
<form onSubmit={onSubmit}>
  <h1>Logowanie</h1>
  <label> Podaj Emaila:
  <input name="email" value={email} onChange={onChange} type="text"/>
  </label>
  <div>
  <label> Podaj Hasło:
  <input name="password" value={password} onChange={onChange} type="text"/>
  </label>
  </div>
  <button>Log in</button>
</form>
    </div>

 )
}
export default Login;