import styled from "styled-components"


export default function Seat({ seat, setSelectedSeats, selectedSeats}) {
   

    
    
    
    function handleSeat(seat) {
        
        if (seat.isAvailable === "false") {
            return;
        }
        seat.selected = !seat.selected;
        if (!seat.selected) {
            const filteredSeats = selectedSeats.filter((s) => !(s.id === seat.id));
            setSelectedSeats([...filteredSeats]);
            return;
        }
        setSelectedSeats([...selectedSeats, seat]);
        return;
    }

    return (
        <>
            {seat.isAvailable ? 
                !seat.selected ? (
                    <BotaoDisponivel onClick={() => handleSeat(seat)}>{seat.name}</BotaoDisponivel>
                ) : (
                    <BotaoSelecionado onClick={() => handleSeat(seat)}>{seat.name}</BotaoSelecionado>
                )
            :
            <BotaoIndisponivel onClick={()=> alert("Assento já selecionado")} > {seat.name}</BotaoIndisponivel> }
        </>

    )
}

// assento esta disponivel ? se sim : renderizar botao indisponivel 
//                           se não : botao esta selecionado ? se sim : renderizar botão disponivel : 
//                                                             se não : renderiza botao selenionado

// assento esta disponivel ? se sim : botao esta selecionado ? se não : renderizar botão disponivel : 
//                                                             se não : renderiza botao selenionado
// assento esta disponivel ? se não : renderizar botao indisponivel 


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
