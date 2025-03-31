function Checkbox({ data, handleOnChange }) {
	const handleCheckBoxChange = (e, id) => {
		const isChecked = e.target.checked;
		handleOnChange(id, isChecked);
	};

	return (
		<div>
			<div className='checkbox-container'>
				<input
					className='checkbox'
					type='checkbox'
					id={data.id}
					name={data.id}
					checked={data.isChecked}
					onChange={(e) => handleCheckBoxChange(e, data.id)}
				/>
				<label htmlFor={data.id}>{data.name}</label>
			</div>

			{data.childrens && (
				<div className='ml-2'>
					{data.childrens.map((val) => {
						return (
							<Checkbox
								data={val}
								key={val.id}
								handleOnChange={handleOnChange}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default Checkbox;
