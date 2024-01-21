import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
const PokeApi = () => {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState(null);
    
    const getPokemon = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        setPokemon(data);
    }
    
    useEffect(() => {
        getPokemon();
    }, [])

  

    return (
        <div className='card'>
        {!id ? (
            <h1>Debes consultar el Pokemon en Home</h1>
        ) : (
            <>
                <div className='cajaText'>
                    <h3>{pokemon?.name.toUpperCase()}</h3>
                    <p>HP: {pokemon?.stats[0]?.base_stat}</p>
                    <p>Ataque: {pokemon?.stats[1]?.base_stat}</p>
                    <p>Defensa: {pokemon?.stats[2]?.base_stat}</p>
                    <p>Ataque Especial: {pokemon?.stats[3]?.base_stat}</p>
                    <p>Velocidad: {pokemon?.stats[5]?.base_stat}</p>
                    <p>Tipo: {pokemon?.types[0]?.type?.name}</p>
                </div>
                
                <div className='cajaImg'>
                    <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
                </div>
            </>
        )}
    </div>
        );
}

export default PokeApi;