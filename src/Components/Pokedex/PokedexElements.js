import styled from "styled-components";

export const MainWrapper = styled.div`
margin-top: 30px;
width: 100%;
height: 300px;
display: flex;
align-items: center;
justify-content: center ; 
`


export const PokemonCard = styled.div`
margin-top: 100px;
height: 250px;
width: 180px;
padding: 30px 30px;
background: linear-gradient( to right, rgba(242, 61, 41, .8), rgba(247, 118, 37, .8));
box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);

display: grid;
grid-template-rows: repeat(3, 1fr);
border-radius: 10px;
`

export const PokemonExp = styled.p`
font-family: pokemon-font, monospace;
grid-row: 10%;
margin-top: 0px;
text-align: right;
`

export const PokemonImg = styled.img`
width: 100%;
height: auto;
border-radius: 5px;

margin-bottom: 10px;
grid-row: 30%;
outline: 1px solid;
`

export const PokemonName = styled.div`
font-family: pokemon-font, monospace;
grid-row: 30%;
margin-top: 10px;
outline: 1px solid;
border-radius: 5px;
padding: 5px;

&:first-letter{
    text-transform:capitalize;
}

text-align: center;
`