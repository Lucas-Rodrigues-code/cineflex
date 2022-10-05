import axios from 'axios';
import { useState, useEffect } from 'react';

import styled from 'styled-components';
import PostFilm from './PostFilm';
import TituloSecao from './TituloSecao';

export default function Conteudo() {

    const [dados, setDados] = useState([])

    useEffect(()=> {
        const promessa = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        console.log(promessa)
        promessa.then((res) => {
            console.log(res.data, "aqui")
            setDados(res.data)
           
        });

        promessa.catch(()=> {
            console.log("deu erro")
        })

    }, [])

    

    return (
        <>
            <Conteudo1>
                <TituloSecao />
            </Conteudo1>
            <ContContainer>
               {dados.map((dado) => <PostFilm key={dado.id} dados={dado}/> )} 
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
`