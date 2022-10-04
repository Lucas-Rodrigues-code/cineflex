import styled from 'styled-components';
import PostFilm from './PostFilm';
import TituloSecao from './TituloSecao';

export default function Conteudo() {
    return (
        <>
            <Conteudo1>
                <TituloSecao />
            </Conteudo1>
            <ContContainer>
                <PostFilm />
                <PostFilm />
                <PostFilm />
                <PostFilm />
                <PostFilm />
                <PostFilm />
                <PostFilm />
                <PostFilm />

                <PostFilm />
                <PostFilm />
                <PostFilm />
                <PostFilm />
                <PostFilm />
                <PostFilm />
                <PostFilm />
                <PostFilm />
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