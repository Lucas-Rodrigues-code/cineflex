import styled from "styled-components"
import { useState } from 'react';

export default function Seat({ seat }) {
   

    const [selectedSeats, setSelectedSeats] = useState([]);
    console.log(selectedSeats)
    //Faz o click em cada componente Seat
    function handleSeat(seat) {
        //Se o assento estiver indisponível não faz nada
        if (seat.isAvailable === "false") {
            return;
        }
        //Toggle - "Liga e desliga" a seleção
        seat.selected = !seat.selected;

        //Se o estado atual é não selecionado precisamos remover o assento
        if (!seat.selected) {
            const filteredSeats = selectedSeats.filter((s) => !(s.id === seat.id));
            setSelectedSeats([...filteredSeats]);
            return;
        }
        //Adicionamos o assento a lista de assentos selecionados
        setSelectedSeats([...selectedSeats, seat]);
        return;
    }

    return (
        <>
            {seat.isAvailable ? <BotaoIndisponivel> {seat.name}</BotaoIndisponivel> :
                !seat.selected ? (
                    <BotaoDisponivel onClick={() => handleSeat(seat)}>{seat.name}</BotaoDisponivel>
                ) : (
                    <BotaoSelecionado onClick={() => handleSeat(seat)}>{seat.name}</BotaoSelecionado>
                )}
        </>

    )
}




const BotaoSelecionado = styled.div`
    background-color: #1AAE9E;

    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const BotaoDisponivel = styled.div`
    background-color: #C3CFD9;

    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const BotaoIndisponivel = styled.div`
    background-color:  #FBE192;

    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
