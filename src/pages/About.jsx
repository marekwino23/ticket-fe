import React, { useReducer, useCallback, useState } from 'react';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker'
import styled from 'styled-components';
import { useTable } from "react-table";
import '../index.css';
import cogoToast from 'cogo-toast';
import {Btn, Container} from '../styled';

const seats = [
    { id: 1, name: 'AA' , booked: false }, 
    { id: 2, name: 'AB' , booked: false }, 
    { id: 3, name: 'AC' , booked: false }, 
    { id: 4, name: 'AD' , booked: false },
    { id: 5, name: 'AE' , booked: false },
    { id: 6, name: 'AF' , booked: false },
    { id: 7, name: 'AG' , booked: false },
    { id: 1, name: 'AH' , booked: false }, 
    { id: 2, name: 'AI' , booked: false }, 
    { id: 3, name: 'AJ' , booked: false }, 
    { id: 4, name: 'AK' , booked: false },
    { id: 5, name: 'AL' , booked: false },
    { id: 6, name: 'AM' , booked: false },
    { id: 7, name: 'AN' , booked: false },
    { id: 1, name: 'AO' , booked: false }, 
    { id: 2, name: 'AP' , booked: false }, 
    { id: 3, name: 'AR' , booked: false }, 
    { id: 4, name: 'AS' , booked: false },
    { id: 5, name: 'AT' , booked: false },
    { id: 6, name: 'AU' , booked: false },
    { id: 7, name: 'AW' , booked: false },
    { id: 1, name: 'AX' , booked: false }, 
    { id: 2, name: 'AY' , booked: false }, 
    { id: 3, name: 'AZ' , booked: false }, 
    { id: 4, name: 'BA' , booked: false },
    { id: 5, name: 'BB' , booked: false },
    { id: 6, name: 'BC' , booked: false },
    { id: 7, name: 'BD' , booked: false },
    { id: 1, name: 'BE' , booked: false }, 
    { id: 2, name: 'BF' , booked: false }, 
    { id: 3, name: 'BG' , booked: false }, 
    { id: 4, name: 'BH' , booked: false },
    { id: 5, name: 'BI' , booked: false },
    { id: 6, name: 'BJ' , booked: false },
    { id: 7, name: 'BK' , booked: false },
    { id: 1, name: 'BL' , booked: false }, 
    { id: 2, name: 'BM' , booked: false }, 
    { id: 3, name: 'BN' , booked: false }, 
    { id: 4, name: 'BO' , booked: false },
    { id: 5, name: 'BP' , booked: false },
    { id: 6, name: 'BR' , booked: false },
    { id: 7, name: 'BS' , booked: false }
]


// function convertDate(date) {
//     if(!date instanceof Date) throw Error('it must be date')
//     return date.toLocaleDateString();
// }

// function dateReducer(state = { day: 1, month: 2, year: 1990 }, action) {
//     switch(action.type) {
//         case 'day': return {...state, day: action.day}
//         case 'month': return {...state, month: action.month}
//         case 'year': return {...state, year: action.year}
//         default: return state
//     };
// }

const Seat = React.memo(({ booked, dir, onClick, seat }) => ( 
    <button className={`seat ${booked.includes(`${dir}_${seat.id}${seat.name}`) ? 'booked' : ''}`} onClick={() => onClick(`${dir}_${seat.id}${seat.name}`)}>{seat.id} {seat.name}</button>
));

const About = () =>{
    const [date, setDate] = useState(new Date())
    const [hour,setHour] = useState()
    const [booked, setBooked] = useState([]);
    const onClick = useCallback(el => {
        console.log('el: ', el);
        setBooked(b => [...b, el]);
    })
    // const [check, setCheck] = useState(false)
    

    const onChange = (date) => {
        setDate(date);   
    };
    const onSpin = (hour) => {
        setHour(hour);   
    };

    const onLoad = () => {
        cogoToast.success(`Dziękuje za rezerwacji miesc ${booked.join(',')} dnia:  ${date} o godz: ${hour}`);
        };

 return(
<Container>
    <h2> WYBIERZ TERMIN  </h2>
    <StyledCalendar
    onChange={onChange}
    value={date}
    />
    <StyledDate>{date.toLocaleDateString()}</StyledDate>
    {/* <form onSubmit={onLoad}> */}
    {/* <input value={check} type="checkbox" name="check" onChange={() => setCheck(ch => !ch)} /> */}
    <TimePicker
    onChange={onSpin}
    value={hour} />
    <Btn onClick={onLoad}>wyslij</Btn>
    <CinemaSeats>
        <div className="left">
            {seats.map(seat => <Seat key={`left_${seat.id}${seat.name}`} seat={seat} onClick={onClick} dir="left" booked={booked} />)}
        </div>

        <div className="right">
            {seats.map(seat => <Seat key={`right_${seat.id}${seat.name}`} seat={seat} onClick={onClick} dir="right" booked={booked} />)}
        </div>
    </CinemaSeats>
    </Container>  
 )
}

const CinemaSeats = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 60rem;
    margin: 5rem auto 0;

.left, .right {
    display: grid;
    grid-template-columns: repeat(7, 3rem);
    grid-column-gap: 1rem;
    grid-template-rows: repeat(auto-fit, 5rem);
}

.left .seat {
    transform: skew(5deg);
}

.right .seat {
    transform: skew(-5deg);
}

    .seat {
        cursor: pointer;
        position: relative;
        width: 3.5rem;
        height: 5rem;
        border-radius: 7px;
        background: linear-gradient(to top,#349bf3,#349bf3,#349bf3,#349bf3,#349bf3,#1212FF,#0012FF);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      
      &:hover:before {
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 7px;
      }
      
      &.active:before {
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 7px;
      }
    }
    .seat.booked {
        background: linear-gradient(to top, #7617DD,#F368C3 );
    }
  }
`;

const StyledDate = styled.output`
    margin: 1.5rem auto;
    display: inline-block;
    font-size: 1.4rem;
    padding: 1rem 2rem;
    border: 1px solid #112231;
`

const StyledCalendar = styled(Calendar)`

max-width: 100rem;
border: none;
margin: 0 auto;
box-shadow: 1px 1px 5px #112211;
.react-calendar__tile {
    border: none;
    box-shadow 1px 1px 5px #112211;
    padding: 1rem 2rem;
    cursor: pointer;
    &--active {
        background-color: #349bf3;
        color: whitesmoke;
        cursor: pointer;
    }
}
`;


export default About;
