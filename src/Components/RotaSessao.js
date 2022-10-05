import styled from 'styled-components';

export default function RotaSessao() {
    return (
        <>
            <ContContainer>
                <Conteudo1>
                    <h1>Selecione o horário</h1>
                </Conteudo1>
            </ContContainer>

            <Responsivo>
                <SessaoHorario>
                    <h1>Quinta-feira - 24/06/2021</h1>
                </SessaoHorario>
                <ConteudoHorario>
                    <button>15:00</button>
                    <button>19:00</button>
                </ConteudoHorario>

                <SessaoHorario>
                    <h1>Sexta-feira - 25/06/2021</h1>
                </SessaoHorario>
                <ConteudoHorario>
                    <button>15:00</button>
                    <button>19:00</button>
                </ConteudoHorario>
            </Responsivo>

            <FooterContainer>
                <Post>
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" alt="filme" />
                </Post>
                <h1>Liga da Justiça</h1>
            </FooterContainer>
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

const SessaoHorario = styled.div`
    width: 241px;
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

const Responsivo = styled.div`
@media (min-width: 600px){
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;

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

    h1{
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

