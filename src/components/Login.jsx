import React, { useState } from 'react';

const API = 'http://localhost:8000';

const Login = () =>{   
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const onChange = ({ target }) => {
  target.name === "email" ? setEmail(target.value) : setPassword(target.value);
}

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });
    console.log('res');
  }

 return(
<div>
<form onSubmit={onSubmit}>
  <div>
  <label> Podaj Emaila:
  <input name="email" value={email} onChange={onChange} type="text"/>
  </label>
  </div>
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