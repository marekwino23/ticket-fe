import React, {useState, useEffect} from 'react';
import foto from '../logo.png';
import cogoToast from 'cogo-toast';

const Home = () => {
    const [data, SetData] = useState([]);

   const getPlaces = async () => {
    const records = await fetch(`${process.env.REACT_APP_API}/miejsca`, {
      method: 'GET',
      credentials: 'include',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
.then(res => res.json());
   SetData(records);
  }

  useEffect(() => {
    getPlaces();
  }, []);

 return(
  cogoToast.info(
<div>
    <h1> To jest strona główna </h1>
    <img src={foto}></img>
    </div>
  )
 )
}
export default Home;