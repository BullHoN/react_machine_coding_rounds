import { useEffect, useState } from 'react';
import './App.css';
import PokemonView from './components/Pokemon';

function App() {
	const [pokemonList, setPokemonList] = useState([]);
	const [apiFetechDeails, setApiFetchDetails] = useState({
		limit: 30,
		offset: 30,
	});
	const [loading, setLoading] = useState(true);
	const [apiError, setApiError] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const url = `https://pokeapi.co/api/v2/pokemon?limit=${apiFetechDeails.limit}&offset=${apiFetechDeails.offset}`;
				const res = await fetch(url);
				const data = await res.json();
				setPokemonList(data.results);
				setApiError('');
			} catch (err) {
				console.log(err);
				setApiError(JSON.stringify(err));
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [apiFetechDeails]);

	console.log(pokemonList);
	return (
		<div className='pokemon-container'>
			<h1>PoKedex</h1>
			{pokemonList.map((pokemon, idx) => (
				<PokemonView pokemonMetaData={pokemon} key={idx} />
			))}
		</div>
	);
}

export default App;
