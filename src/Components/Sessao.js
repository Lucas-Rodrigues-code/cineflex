import styled from 'styled-components';
import { Link } from "react-router-dom"

export default function Sessao({ dado }) {
   
    return (
        <>

            <SessaoHorario>
                <h1 data-identifier="session-date">{dado.weekday} - {dado.date}</h1>
            </SessaoHorario>
            <ConteudoHorario>
                {dado.showtimes.map((showtime) => {
                    return(
                    <Link to={`/assentos/${showtime.id}`} key={showtime.id}>
                        <button data-identifier="hour-minute-btn">{showtime.name}</button>
                    </Link>)

                })}
            </ConteudoHorario>

        </>
    )
}


const SessaoHorario = styled.div`
    width: 260px;
    height: 35px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;

    color: #293845;

    display:flex;
    flex-direction:row;

    margin-left:24px;
    margin-top:22px;

`
const ConteudoHorario = styled.div`
   display:flex;
  

  button{
    width: 82px;
    height: 43px;
    color: #FFFFFF;

    background: #E8833A;
    border-radius: 3px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    margin-left:24px;
    margin-top:22px;
  }

`