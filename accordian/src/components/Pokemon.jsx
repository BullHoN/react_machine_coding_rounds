import { useState } from 'react';
import PokemonDetails from './PokemonDetails';

function PokemonView({ pokemonMetaData }) {
	const [accordianExpanded, setAccodianExpanded] = useState(false);
	const [pokemonData, setPokemonData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const getPokemonData = async () => {
		try {
			setIsLoading(true);
			const url = pokemonMetaData.url;
			const res = await fetch(url);
			const data = await res.json();

			setPokemonData(data);
			setError([]);
		} catch (err) {
			console.log(err);
			setError(JSON.stringify(err));
		} finally {
			setIsLoading(false);
		}
	};

	const handleAccordianToogle = async (e) => {
		if (!accordianExpanded) await getPokemonData();
		setAccodianExpanded((prevVal) => !prevVal);
	};

	return (
		<div className='accordian-container' onClick={handleAccordianToogle}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<h3>{pokemonMetaData.name}</h3>
				<span className='btn'>
					{accordianExpanded ? 'Collapsed' : 'Expanded'}
				</span>
			</div>
			<div className='accordian'>
				{pokemonData && (
					<PokemonDetails
						pokemonData={pokemonData}
						isVisible={accordianExpanded}
					/>
				)}
			</div>
		</div>
	);
}

export default PokemonView;
