import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function RotaSucesso({infoFinal}) {

    if(infoFinal === null){
        return <div>Acesso não autorizado !</div>
    }
    return (
        <>
            <TituloSucesso>
                <h1>Pedido feito<br />com sucesso!</h1>
            </TituloSucesso>
            <ContainerInfo>
                <h1>Filme e sessão</h1>
                <span data-identifier="movie-session-infos-reserve-finished">{infoFinal.infoFinal.movie.title} {infoFinal.infoFinal.day.date} {infoFinal.infoFinal.name}</span>
                <h1>Ingressos</h1>
                {infoFinal.assentos.map((a,i) => <span key={i} data-identifier="seat-infos-reserve-finished">assento: {a}<br/></span>)}
                <h1>Comprador</h1>
                <span data-identifier="buyer-infos-reserve-finished">Nome: {infoFinal.user.name}<br />CPF: {infoFinal.user.cpf}</span>

            </ContainerInfo>
            <Botao>
                <Link to={"/"}>
                    <button data-identifier="back-to-home-btn">Voltar pra Home</button>
                </Link>
            </Botao>
        </>


    )
}

const TituloSucesso = styled.div`
        width: 100%;
        height: 110px;
        display:flex;
        justify-content:center;
        
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;

        color: #247A6B;
    }
    


`
const ContainerInfo = styled.div`
    margin-left:29px;
    @media (min-width: 600px){
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    

    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        color: #293845;

        margin-top:30px;
        margin-bottom:10px;
    }
    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        color: #293845;
        
    }


`
const Botao = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    margin-top:62px;
    button{
        width: 225px;
        height: 42px;
        

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
        letter-spacing: 0.04em;

        color: #FFFFFF;

        display:flex;
        justify-content:center;
    }
    

`