import { BASE_API_URL } from '../constants.js';

export async function getKantoPokemons() {
    try {
        const response = await fetch(`${BASE_API_URL}pokemon?limit=151`);
        const data = await response.json();
        return data;
    } catch (e){
        console.log(e)
    }
}

export async function getPokemonData(pokemonId) {
    try {
        const response = await fetch(`${BASE_API_URL}pokemon/${pokemonId}`);
        const data = await response.json();
        return data;
    } catch (e) { console.log(e) }
}