//Bibliotecas
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Componentes 
import RotaSessao from './RotaSessao';
import Logo from "./Logo"
import RotaInicial from './RotaInicial'
import RotaAssentos from "./RotaAssentos"
import RotaSucesso from "./RotaSucesso"

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Logo />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RotaInicial />} />
                    <Route path="/sessoes/:idFilme" element={<RotaSessao />} />
                    <Route path="/assentos" element={<RotaAssentos />} />
                    <Route path="/sucesso" element={<RotaSucesso />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}



const GlobalStyle = createGlobalStyle`
    body {
        box-sizing:border-box;
        margin:0;
        background: #E5E5E5;

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    }
`

