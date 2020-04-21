import React, {useState, useEffect} from 'react';
import foto from '../logo.png';
import cogoToast from 'cogo-toast';
import obrazek from '../search-solid.svg';


const Home = () => {
    const [data, SetData] = useState([]);
    const [val, setVal] = React.useState([""])
    const handle = {setVal}

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
  <div>
    <form>
      <input type="text" value={val} onInput={handle} />
      <img className="search" src={obrazek}></img>
    </form>
    <div className="container__box">
      <div className="box">
        1
      </div>
      <div className="box">
        2
      </div>
      <div class="box">
        3
      </div>
      <div class="box">
        4
      </div>
    </div>
  </div>
  )
}

export default Home;