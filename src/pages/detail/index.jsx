import React from 'react'
import { Btn } from '../../styled'
import { useHistory, useLocation, Link } from 'react-router-dom';
import './index.css';



const Detail = () => {
    const history = useHistory();
    const { state } = useLocation();
    const onClick = () => history.goBack();
    const onBook = () => { 
        console.log('movie: ', state.item);
        history.push('/about', {
        movie: state.item
    }) 
}
    return (
    <div className="detail">
        <button class="detail__btn--back" onClick={onClick}>Back</button>
        <Link to={{ pathname: '/about', state: {movie: state.item  }}}>Zarezerwuj</Link>
        <Btn onClick={onBook} > Zarezerwuj Bilet </Btn>
        <h2>{state.item.name}</h2>
        <figure>
            <img src={state.item.src} alt={state.item.name} />
            <caption>{state.item.name} {state.item.info}</caption>
        </figure>
        <p>{state.item.desc}</p>
    </div>
    )
}

export default Detail