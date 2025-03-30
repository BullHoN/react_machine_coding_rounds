function PokemonDetails({ pokemonData, isVisible }) {
	return (
		<div>
			<div
				className={`abilities ${isVisible ? 'expanded' : ''}`}
				style={{ display: isVisible ? 'flex' : 'none' }}
			>
				{pokemonData &&
					pokemonData.abilities.map((ability, idx) => (
						<div key={idx} className='ability'>
							<p>Ability</p>
							<p>{ability.ability.name}</p>
						</div>
					))}
			</div>
		</div>
	);
}

export default PokemonDetails;
