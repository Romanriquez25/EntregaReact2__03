import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [id , setId] = useState(1);
    const navigate = useNavigate();
    const irPokemon = () => {
        navigate(`/Pokemones/${id}`);
    }

    const options = [];
    for(let i = 1; i <= 100; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
    }

    return (
        <div className='cajaPrincipal'>
             <div>
                <h1>Hola Entrenador Pokemon!</h1>
                <img className='imgPikachu' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu" />
                <h2>Elige un Pokemon del 1 al 100</h2>
                <select value={id} onChange={({target}) => setId(target.value)}>
                    {options}
                </select>
                <button onClick={irPokemon}>Ir a Pokemon</button>
            </div>
        </div>
    );
}


export default Home;