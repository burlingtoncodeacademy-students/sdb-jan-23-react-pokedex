import React, { useEffect, useState } from 'react'

export const Pokemon = ({ search }) => {

    const [ pokemon, setPokemon ] = useState(null)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
            .then(res => res.json())
            .then(data => {
                setPokemon(data)
            })
            .catch(err => console.log(err))
    }, [search])

    const renderPokedex = () => {
        if (!search) {
            return <h1>Loading...</h1>
        } else {
            return <div>
                <h1>{pokemon.name}</h1>
                <h3>{pokemon.weight}</h3>
                <img src={pokemon.sprites.front_shiny} alt="" sizes="" srcset="" />
            </div>
        }
    }

  return (
    <div>
        {renderPokedex()}
    </div>
  )
}
