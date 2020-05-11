import React from 'react'
import { useHistory } from 'react-router-dom';
import './index.css';

const Item = ({ history, item }) => {
  const onClick = () => history.push(`/${item.id}`, {item});
  return (
    <li className={`list__item list__item--${item.id}`} onClick={onClick}>
    {item.name}
  </li>
  )
  }
  
  
  
const List = ({ data }) => {
    const history = useHistory();
    return(
    <ul className="list">
        {/* {React.Children.map(data, item => (
            <p>{item.name}</p>
        ))} */}
        {data.map(item => (
            <Item key={item.id} item={item} history={history}  />
        ))}
    </ul>
  )
}

  export default List;