import React, {useState, useEffect, useMemo } from 'react';
import cogoToast from 'cogo-toast';
import batman from '../batman.jpg';
import avatar from '../avatar.jpg';
import avengers from '../avengers.jpg';
import spiderman from '../spiderman.jpg';
import superman from '../superman.jpg';
import xmen from '../xmen.jpg';
import obrazek from '../search-solid.svg';
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

const movies = [
  { id: 1, name: 'Batman', desc: "Batman, z pomocą porucznika Gordona oraz prokuratora Harveya Denta, występuje przeciwko przerażającemu i nieobliczalnemu Jokerowi, który chce pogrążyć Gotham City w chaosie.", src: batman  }, 
  { id: 2, name: 'Superman', desc: "Po latach nieobecności Superman wraca na Ziemię, by ocalić ludzkość i pokrzyżować plany Lexa Luthora.", src: superman }, 
  { id: 3, name: 'Spiderman', desc: "Hero moving like spider", src: spiderman }, 
  { id: 4, name : 'X-men', desc: "Hero having sharp claves", src: xmen }, 
  {id: 5, name: 'Avengers', desc: "Hero who will avenge", src: avengers }, 
  {id: 6, name: "Avatar", desc: "Hero who bends all elements of nature", src: avatar } ];
console.log(movies.src)
const Home = () => {
    const [data, setData] = useState([]);
    const [term, setTerm] = React.useState('');

    const filterMovies =  useMemo(() => {
      return term.length ? movies.filter(movie => movie.name.toLowerCase().startsWith(term) ) : movies;
    });

   const getMovies = async () => {
    const records = await fetch(`${process.env.REACT_APP_API}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
.then(res => res.json());
   setData(records);
  }

  useEffect(() => {
    getMovies();
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
  </div>
  )
}

export default Home;