import React, {useState, useEffect, useMemo } from 'react';
import batman from '../batman.jpg';
import avatar from '../avatar.jpg';
import avengers from '../avengers.jpg';
import spiderman from '../spiderman.jpg';
import Superman from '../Superman.jpg';
import xmen from '../xmen.jpg';
import obrazek from '../search-solid.svg';
import List from '../components/list'
import SearchBar from '../components/SearchBar';


const movies = [
  { id: 1, name: 'Batman', info: "Pon:16:00-18:00 Sb: 12:00-14:00", desc: "Batman, z pomocą porucznika Gordona oraz prokuratora Harveya Denta, występuje przeciwko przerażającemu i nieobliczalnemu Jokerowi, który chce pogrążyć Gotham City w chaosie.", src: batman  }, 
  { id: 2, name: 'Superman', info: "Wt:15:00-17:00 Nd: 12:00-14:00", desc: "Po latach nieobecności Superman wraca na Ziemię, by ocalić ludzkość i pokrzyżować plany Lexa Luthora.", src: Superman }, 
  { id: 3, name: 'Spiderman', info: "Pon:20:00-22:00 Pt: 10:00-12:00", desc: "Hero moving like spider", src: spiderman }, 
  { id: 4, name : 'X-men',  info: "Śr:14:00-16:00 Sb: 16:00-19:00", desc: "Hero having sharp claves", src: xmen }, 
  {id: 5, name: 'Avengers',  info: "Czw:22:00-24:00 Pt: 19:00-21:00", desc: "Hero who will avenge", src: avengers }, 
  {id: 6, name: "Avatar", info: "Czw:12:00-14:00 Nd: 16:00-18:00",  desc: "Hero who bends all elements of nature", src: avatar } ];
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