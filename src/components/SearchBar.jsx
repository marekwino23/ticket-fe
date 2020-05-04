import React from 'react'

export default ({ term, setTerm }) => {
  const handleChange = event => {
      setTerm(event.target.value);  
  };

  return(
  <input type="text" placeholder="search" value={term} onChange={handleChange} />
  )
};