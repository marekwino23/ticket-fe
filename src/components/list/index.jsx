import React from 'react'
import './index.css';

const Item = ({ name,num }) => {
    return (
      <li className={`list__item list__item--${num+1}`}>
      {name}
    </li>
    )
  }
  
  
  
const List = ({ data }) => {
    return(
    <ul className="list">
        {/* {React.Children.map(data, item => (
            <p>{item.name}</p>
        ))} */}
        {data.map(({ id, name }, i) => (
            <Item key={id} name={name} num={i} />
        ))}
    </ul>
  )
}

  export default List;