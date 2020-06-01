import React from 'react';
import Obraz from '../../marek.png';

export default () =>{
 const user = JSON.parse(sessionStorage.getItem('user'));
 return(
<div>
 <img style = {{width: "180px"}}src={Obraz}/> 
 <h2> Uzytkownik: { user.name}</h2>
 <h2> Email: {user.email}</h2>
 <h2> Punkty: 0</h2>
 <h2> Aktywne bilety: brak</h2>
    </div>

 )
}