import styled from 'styled-components';

export default function Logo(){
    return(
        <LogoContainer>
            <h1>CINEFLEX</h1>
        </LogoContainer>
    )
}

const LogoContainer =styled.div`
    width: 100%;
    height: 67px;

    background: #C3CFD9;
    display:flex;
    align-items:center;
    justify-content:center;

    h1{
        color: #E8833A;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
    }
    

`