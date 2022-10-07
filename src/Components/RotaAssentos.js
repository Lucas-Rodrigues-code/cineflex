//Bibliotecas
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function RotaAssentos() {

    const { idSessao } = useParams();
    const [dados, setDados] = useState(null)

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        promise.then((res) => {

            setDados(res.data)

        })
        promise.catch(() => {
            console.log("deu erro")
        })


    }, [])

    return (
        <>
            <ContainerTitulo>
                <Titulo>
                    <h1>Selecione o(s) assento(s)</h1>
                </Titulo>
            </ContainerTitulo>

            <Container>
                <ContainerAssentos>
                    <ContainerButtun>
                        <button>01</button>
                        <button>02</button>
                        <button>03</button>
                        <button>04</button>
                        <button>05</button>
                        <button>06</button>
                        <button>07</button>
                        <button>08</button>
                        <button>09</button>
                        <button>10</button>

                        <button>01</button>
                        <button>02</button>
                        <button>03</button>
                        <button>04</button>
                        <button>05</button>
                        <button>06</button>
                        <button>07</button>
                        <button>08</button>
                        <button>09</button>
                        <button>10</button>

                        <button>01</button>
                        <button>02</button>
                        <button>03</button>
                        <button>04</button>
                        <button>05</button>
                        <button>06</button>
                        <button>07</button>
                        <button>08</button>
                        <button>09</button>
                        <button>10</button>

                        <button>01</button>
                        <button>02</button>
                        <button>03</button>
                        <button>04</button>
                        <button>05</button>
                        <button>06</button>
                        <button>07</button>
                        <button>08</button>
                        <button>09</button>
                        <button>10</button>

                        <button>01</button>
                        <button>02</button>
                        <button>03</button>
                        <button>04</button>
                        <button>05</button>
                        <button>06</button>
                        <button>07</button>
                        <button>08</button>
                        <button>09</button>
                        <button>10</button>
                    </ContainerButtun>
                </ContainerAssentos>
            </Container>
            <ContainerInfo>
                <Info>
                    <Selecionado />
                    <Disponível />
                    <Indisponível />
                </Info>
                <Legenda>
                    <h1>Selecionado</h1>
                    <h1>Disponível</h1>
                    <h1>Indisponível</h1>
                </Legenda>


            </ContainerInfo>
            <ContainerInput>
                <h1>Nome do comprador:</h1>
                <input placeholder='Digite seu nome...' />
                <h1>CPF do comprador:</h1>
                <input placeholder='Digite seu CPF...' />
            </ContainerInput>
            <FooterContainer>
                <Post>
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" alt="filme" />
                </Post>
                <span>Liga da Justiça <br />Quinta-feira - 15:00</span>
            </FooterContainer>

        </>
    )
}


const ContainerTitulo = styled.div`
    width: 100%;
    height:auto;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#E5E5E5;
    
   

`
const Titulo = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#E5E5E5;

    h1{
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
    
    width: 360px;
    height: 110px;

    display:flex;
    align-items:center;
    justify-content:center;
    }
`
const Container = styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;

`
const ContainerAssentos = styled.div`
    width:100%;
    height:auto;

    @media (min-width: 600px){
        width:400px;
        height:auto;
        display:flex;
        justify-content:center;
        align-items:center;
      
    }

    


 

color: #000000;

    button{
        width: 26px;
        height: 26px;

        background: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 12px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;

        color: #000000;

        margin-left:7px;
        margin-top:18px;
    }


`
const ContainerButtun = styled.div`
   margin-left:10px;
    display:flex;
    flex-wrap:wrap;
    width:350px;
`
const ContainerInfo = styled.div`
    width:100%;
    height:50px;
   
    margin-top:20px;
    display:flex;
    align-items:center;
    flex-direction:column;




`
const Selecionado = styled.div`
    width: 25px;
    height: 25px;

    margin-right:70px;

    background: #1AAE9E;
    border: 1px solid #1AAE9E;
    border-radius: 17px;
    
`
const Disponível = styled.div`
    width: 25px;
    height: 25px;

    margin-right:50px;
    

    background: #C3CFD9;
    border: 1px solid #1AAE9E;
    border-radius: 17px;
    
`
const Indisponível = styled.div`
    width: 25px;
    height: 25px;
    
   

    background: #FBE192;
    border: 1px solid #1AAE9E;
    border-radius: 17px;
    
`
const Info = styled.div`
    display:flex;
   


`
const Legenda = styled.div`
    display:flex;
   
    
    
    h1{
        
        margin-top:5px;
        margin-left:5px;
        margin-right:5px;

    }
    
`
const ContainerInput = styled.div`
    width:100%;
    height:auto;
    margin-top:10px;
    margin-bottom:150px;
    
    @media (min-width: 600px){
        display:flex;
        flex-direction:column;
        align-items:center;
   
    }
   
    input{
        width: 327px;
        height: 51px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-top:10px;
        margin-bottom:10px;
        margin-left:20px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }

    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;

        color: #293845;
        margin-left:20px;
    }

`
const FooterContainer = styled.div`
    width: 100%;
    height: 117px;

    background: #DFE6ED;
    border: 1px solid #9EADBA;

    display:flex;
    align-items:center;
    bottom:0px;
    position:fixed;

    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;

        color: #293845;

        margin-left:20px;
    }
    
    
   
`
const Post = styled.div`

    width: 64px;
    height: 89px;
    background: #FFFFFF;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:10px;

   
    img{
        width: 48px;
        height: 72px;

    }
`