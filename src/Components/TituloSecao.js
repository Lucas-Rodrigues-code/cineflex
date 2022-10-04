import styled from "styled-components"

export default function TituloSecao(){
    return(
        <Titulo>Selecione o filme</Titulo>
    )
}

const Titulo = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #293845;
    
    width: 374px;
    height: 110px;

    display:flex;
    align-items:center;
    justify-content:center;
`