import { useState } from 'react';
import Checkbox from './Checkbox';

const defaultData = {
	id: 0,
	name: 'Parent 1',
	isChecked: false,
	childrens: [
		{
			id: 1,
			name: 'Parent 2',
			isChecked: false,
			childrens: [
				{
					id: 4,
					name: 'Child 1',
					isChecked: false,
					childrens: [],
				},
				{
					id: 5,
					name: 'Child 2',
					isChecked: false,
					childrens: [],
				},
				{
					id: 6,
					name: 'Child 3',
					isChecked: false,
					childrens: [],
				},
			],
		},
		{
			id: 2,
			name: 'Parent 3',
			isChecked: false,
			childrens: [
				{
					id: 3,
					name: 'Child 5',
					isChecked: false,
					childrens: [],
				},
			],
		},
		{
			id: 7,
			name: 'Parent 4',
			isChecked: false,
			childrens: [],
		},
		{
			id: 8,
			name: 'Parent 5',
			isChecked: false,
			childrens: [],
		},
	],
};

function NestedCheckbox() {
	const [data, setData] = useState(defaultData);

	const getUpdatedState = (root, id, isChecked, forceUpdate = false) => {
		const res = { id: root.id, isChecked: root.isChecked, name: root.name };
		if (root.id == id) {
			res.isChecked = isChecked;
		}
		if (forceUpdate) {
			res.isChecked = isChecked;
		}
		res.childrens = root.childrens.map((child) => {
			return getUpdatedState(
				child,
				id,
				isChecked,
				forceUpdate ? forceUpdate : root.id == id
			);
		});

		const areAllChildrensChecked = res.childrens.every(
			(child) => child.isChecked
		);

		if (res.childrens.length > 0) {
			res.isChecked = areAllChildrensChecked;
		}

		return res;
	};

	const handleOnChange = (id, isChecked) => {
		const updatedState = getUpdatedState(data, id, isChecked);
		setData(updatedState);
	};

	return (
		<div>
			{data && <Checkbox data={data} handleOnChange={handleOnChange} />}
		</div>
	);
}

export default NestedCheckbox;
