
import { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'

const PokemonDisplay = () => {
	const [pokemonObjects, setPokemonObjects] = useState([]);
	console.log(pokemonObjects);

	// with empty dependency array, useEffect will run func
	// once, right after mounting

	// api request takes time, .then() tells us what to do 
	// after api (server somewhere else) gives us a response
	useEffect(() => {

		axios("https://pokeapi.co/api/v2/pokemon").then((response) => {
			console.log(response);
			// response should look like json
			let array = response.data.results;
			setPokemonObjects(array);
		})
		// a promise


		console.log("next code") // shows up twice because render happens twice during development
	}
		, [])

	// get data from API
	// do this once! we don't want infinite re-renders, so useEffect
	// set state to results array
	// re-render!

	// NOTES: React has strict mode. during development, components mount, dismount, and mount again during development only.
	// that is why the "next code" is console logged twice
	// shit will show up twice


	return (
		<div id="pokemon-container">
			{pokemonObjects.map((pokemon) => {
				return (
					<div key={pokemon.url}>
						<span>{pokemon.name}</span>
						<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`} />
					</div>
				)
			})}
		</div>
	)
}

export default PokemonDisplay