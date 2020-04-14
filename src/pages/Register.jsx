import React, { useState } from 'react';



const Register = () => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
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
            } catch(error) {
              setError(error.message);
            }
        }
      
        if(loading && !error) return <div>loading...</div>

    return(
      <div>
        <form onSubmit={onSubmit}>
      <label> Podaj Imie i Nazwisko:
      <input name="name" value={name} onChange={onChange} type="text"/>
      </label>
      <label> Podaj Emaila:
      <input name="email" value={email} onChange={onChange} type="text"/>
      </label>
      <label> Podaj Hasło:
      <input name="password" value={password} onChange={onChange} type="text"/>
      </label>
      <button>Register</button>
      </form>
      </div>
    )}

    export default Register;