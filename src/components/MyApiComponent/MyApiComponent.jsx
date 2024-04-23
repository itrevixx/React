import { useState, useEffect } from 'react';
import { getPokemon, } from '../../app/services/pokemons'



const MyApiComponent = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    getPokemon().then((response) => {
      setPokemon(response);
    });
  }, []);

  return (
    <div>
      {pokemon.map(pkm => (
        <div key={pkm}>
          <h2>{pkm.name}</h2>
        </div>
      ))}
    </div>
  )
};
export default MyApiComponent;