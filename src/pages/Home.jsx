import React, {useState, useEffect, useMemo } from 'react';
import foto from '../logo.png';
import cogoToast from 'cogo-toast';
import obrazek from '../search-solid.svg';
import photo from '../Batman.jpg';
import List from '../components/list'
import SearchBar from '../components/SearchBar';

// const Checkitem = (e) => {
// const[searchterm, setSearch] = React.useState("");
// const[result, setResult] = React.useState([]);
// const handleChange = event => {
// setSearch(event.target.value);  
// };

// React.useEffect(() => {
//   const results = [].filter(movie =>
//     movie.toLowerCase().includes(searchterm.toLowerCase())
//   );
//   setResult(results);
// },);
// return(
// <div>
//   <input type="text" placeholder="search" value={searchterm} onChange = {handleChange}></input>
// </div>
// )
// };

const movies = [{ id: 1, name: 'Batman', src : {photo}}, { id: 2, name: 'Superman' }, { id: 3, name: 'Spiderman' }, { id: 4, name : 'X-men' }, {id: 5, name: 'Avengers'}, {id: 6, name: "Avatar"} ];
console.log(movies.src)
const Home = () => {
    const [data, setData] = useState([]);
    const [term, setTerm] = React.useState('');

    const filterMovies =  useMemo(() => {
      return term.length ? movies.filter(movie => movie.name.toLowerCase().startsWith(term) ) : movies;
    });

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
   setData(records);
  }

  useEffect(() => {
    getPlaces();
  }, []);

   // useEffect(() => {
  //   const results = movies.filter(movies =>
  //     movies.toLowerCase().includes(searchterm.toLowerCase())
  //   );
  //   setResults(results);
  // });

 return(
  <div>
    <form>
      <SearchBar term={term} setTerm={setTerm} />
      <img className="search" src={obrazek}></img> 
    </form>
    <List data={filterMovies} />
    {/* <List data={movies} /> */}
  </div>
  )
}

export default Home;