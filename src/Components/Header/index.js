import React from 'react'
import {
    HeaaderWrapper,
    LogoWrapper,
    LogoImg,
} from "./HeaderElements"
import Logo from "../../images/pokemon_logo.png"

const Heaader = () => {
    return (
        <HeaaderWrapper>
        <LogoWrapper>
        <LogoImg src={Logo}/>
        <p
        style={{fontFamily : "pokemon-font, monospace"}}>Card</p>
        </LogoWrapper>
        </HeaaderWrapper>
    )
}

export default Heaader
