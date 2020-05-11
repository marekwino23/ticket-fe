import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import './index.css';

const Detail = () => {
    const history = useHistory();
    const { state } = useLocation();
    const onClick = () => history.goBack();
    return (
    <div className="detail">
        <button class="detail__btn--back" onClick={onClick}>Back</button>
        <h2>{state.item.name}</h2>
        <figure>
            <img src={state.item.src} alt={state.item.name} />
            <caption>{state.item.name}</caption>
        </figure>
        <p>{state.item.desc}</p>
    </div>
    )
}

export default Detail