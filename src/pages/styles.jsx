import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles= createGlobalStyle`
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
`

export const Titulo = styled.h1`
color : #008cff;
background-color : #001069;

`
export const Sub = styled.nav`
background-color : #004358;
width : 100%;
display : flex;
align-items: center;
gap: 30px;
justify-content: center;

&>ul {
    display : flex;
    gap: 30px;
    list-style:none;
    &>li>a{
        color : #00ffea;
        text-decoration: none
    }

}
`
export const TituloCard = styled.h2`
    color : #125083;
    font-size: 24px;
`
export const SubtituloCard = styled.h3`
color : #0400ff;
font-size: 18px;
font-style: italic;
`

export const ImgCard = styled.img`
max-width: 300px;
border-radius: 50%;
`
export const DescCard = styled.p`
font-size: 16px;
line-height: 1.3;
`
export const DuracaoCard = styled.span`
color: #3e82ff;
font-size: 16px;
`
export const SobreCard = styled.p`
font-size: 14px;
line-height: 1.5;
`
export const Card = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 5px;
margin: 0 auto;
background-color: #dfdfdf;
max-width: 70vw;
border-radius: 15px;
padding: 20px;
box-shadow: 5px 5px 10px ;
`