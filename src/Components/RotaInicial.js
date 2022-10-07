//Bibliotecas
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
//Componentes
import PostFilm from './PostFilm';


export default function RotaInicial() {

    const [dados, setDados] = useState([]);


    useEffect(() => {
        const promessa = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        promessa.then((res) => {
            setDados(res.data)

        });

        promessa.catch(() => {
            console.log("deu erro")
        });

    }, []);

console.log(dados, "aqui")

    return (
        <>
            <Conteudo1>
                <h1>Selecione o filme</h1>
            </Conteudo1>
            <ContContainer>
                {dados.map((dado) => <PostFilm key={dado.id} dados={dado} />)}
            </ContContainer>
        </>
    )
}


const ContContainer = styled.div`
    width: 100%;
    height:auto;

    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#E5E5E5;
    flex-wrap:wrap;

`
const Conteudo1 = styled.div`
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
    
    width: 374px;
    height: 110px;

    display:flex;
    align-items:center;
    justify-content:center;
    }
`