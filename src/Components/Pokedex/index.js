import React, {useState, useEffect} from 'react'
import {
    PokemonCard,
    MainWrapper,
    PokemonExp,
    PokemonImg,
    PokemonName
} from "./PokedexElements"

const PokedexMain = () => {
    const [pokemon , setPokemon] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    // color of the card
    // other data

    const fetchApi = async() => {
        const res = await fetch(`https://pokeapi.co:443/api/v2/pokemon/6`)
        const charizard = await res.json()
        console.log(charizard, "charizard");
        setPokemon({
            name : charizard.name,
            image : charizard.sprites.front_default,
            id : charizard.id,
            exp : charizard.base_experience,
        })
    }

    useEffect(() => {
        fetchApi()
        console.log(pokemon, "STATE");
    }, [])

    return <>
    <MainWrapper>
    <PokemonCard style={{listStyleType : "none"}}>
    <PokemonExp> Exp: {pokemon.exp}</PokemonExp>
    <PokemonImg src={pokemon.image} />
    <PokemonName>{pokemon.name}</PokemonName>
    </PokemonCard>
    </MainWrapper>
    </>
}

export default PokedexMain
