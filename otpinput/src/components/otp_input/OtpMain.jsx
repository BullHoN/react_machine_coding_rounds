import { useEffect, useRef, useState } from 'react';
import './OtpMain.css';

const DEFAULT_INPUT_SIZE = 4;
function OtpMain({ inputSize = DEFAULT_INPUT_SIZE }) {
	const [inputArr, setInputArr] = useState(new Array(inputSize).fill(''));
	const inputRefs = useRef([]);

	useEffect(() => {
		inputRefs.current[0]?.focus();
	}, []);

	const handleOptInputChange = (e, idx) => {
		if (isNaN(e.target.value)) return;

		const newVal = e.target.value.trim();
		const newInputArr = [...inputArr];
		newInputArr[idx] = newVal.slice(-1);
		setInputArr(newInputArr);

		const nextIdx = Math.min(inputSize - 1, idx + 1);
		newVal && inputRefs.current[nextIdx]?.focus();
	};

	const handleBackspace = (e, idx) => {
		if (e.code !== 'Backspace') return;

		const val = inputArr[idx];
		if (val) return;

		const prevIdx = Math.max(0, idx - 1);
		inputRefs.current[prevIdx]?.focus();
	};

	return (
		<div className='otp-container'>
			{inputArr.map((val, idx) => (
				<input
					className='otp-input'
					type='text'
					key={idx}
					value={inputArr[idx]}
					onChange={(e) => handleOptInputChange(e, idx)}
					ref={(input) => (inputRefs.current[idx] = input)}
					onKeyDown={(e) => handleBackspace(e, idx)}
				></input>
			))}
		</div>
	);
}

export default OtpMain;
