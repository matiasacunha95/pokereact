import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as API from '../services/pokemons.js';
import { POKE_IMAGE_BASE } from '../constants.js';

const Grid = {
    padding: '0px 20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gridGap: '12px'
};

const Item = {
    padding: '5px',
    minHeight: '200px',
    backgroundColor: 'white'
};

const PokemonName = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const PokeLink = {
    textDecoration: 'none',
    color: 'inherit'
};

const ImageContainer = {
    width: '230px',
    height: '230px'
};

const ImageStyle = {
    width: '230px',
    height: '230px',
    objectFit: 'contain'
};

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        API.getKantoPokemons().then(setPokemons)
    }, [])

    return (
        <div style={Grid}>
            {pokemons.results != null && pokemons.results.map(p => PokemonCard(p))}
        </div>
    );
}

const PokemonCard = (pokemon) =>
    <div style={Item}>
        <Link style={PokeLink} key={pokemon.name} to={`pokemon/${pokemon.name}`}>
            <div style={ImageContainer}>
                <img
                    style={ImageStyle}
                    alt={pokemon.name}
                    key={pokemon.name}
                    src={`${POKE_IMAGE_BASE}${pokemon.name}.jpg`}
                />
            </div>
            <h5 style={PokemonName}>
                {pokemon.name != null ? pokemon.name.toUpperCase() : pokemon.name}
            </h5>
        </Link>
    </div>