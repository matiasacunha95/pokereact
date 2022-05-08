import { LOGO } from "./constants.js";
import { Routes, Route } from "react-router-dom";
import PokemonList from './components/PokemonList.js';
import PokemonDetail from './components/PokemonDetail.js';

const Title = {justifyContent: 'center', width: '600px', padding: '10px', display: 'block', margin: '0px auto'};

export default function App() {
    return (
        <>
            <img src={LOGO} alt='Pokémon' style={Title}/>
            <Routes>
                <Route path="/" element={<PokemonList />} />
                <Route path="/pokemon/:pokemonId" element={<PokemonDetail />} />
            </Routes>
        </>
    );
}

