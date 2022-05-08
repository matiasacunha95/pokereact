import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from '../services/pokemons.js';
import { POKE_IMAGE_BASE } from '../constants.js';

export default function PokemonDetail(){
    const { pokemonId } = useParams();
    const [pokemonDetail, setPokemonDetail] = useState({})

    useEffect(() => {
        API.getPokemonData(pokemonId).then(setPokemonDetail)
    }, [pokemonId])

    return (
        pokemonDetail !== null &&
            <>
                <img
                    width={350}
                    alt={pokemonDetail.name}
                    key={pokemonDetail.name}
                    src={`${POKE_IMAGE_BASE}${pokemonDetail.name}.jpg`}
                />
                <h3>
                    {pokemonDetail.name != null ? pokemonDetail.name.toUpperCase() : pokemonDetail.name}
                </h3>
            </>
    );
}