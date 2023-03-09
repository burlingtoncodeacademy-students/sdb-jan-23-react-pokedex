import React, { useEffect, useState } from "react";

export const Pokemon = ({ search }) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(search)
    console.log("use effect ran")
    if (search) {
      setLoading(true);
      fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPokemon(data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  }, [search]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{pokemon.name}</h1>
          <p>{pokemon.weight}</p>
          <img src={pokemon.sprites.front_shiny} alt="" />
        </>
      )}
    </div>
  );
};
