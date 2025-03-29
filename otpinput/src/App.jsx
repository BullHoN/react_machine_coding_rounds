import OtpMain from './components/otp_input/OtpMain';
import './App.css';

function App() {
	return (
		<div className='container'>
			<h1>Otp View</h1>
			<OtpMain inputSize={6} />
		</div>
	);
}

export default App;
