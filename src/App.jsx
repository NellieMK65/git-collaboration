import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const [firstName, setFirstName] = useState('Tony');
	const [lastName, setLastName] = useState('');
	console.log(firstName);
	const [age, setAge] = useState();
	const [gender, setGender] = useState('');

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		age: undefined,
	});

	console.log(formData);

	//
	//nicole is working on this project

	return (
		<>
			{/* Controlled input - fully handled using state */}

			<input
				type="text"
				placeholder="First Name"
				value={firstName}
				onChange={(e) => {
					setFirstName(e.target.value);
				}}
			/>
			<input
				type="text"
				placeholder="Last Name"
				value={lastName}
				onChange={(e) => {
					setLastName(e.target.value);
				}}
			/>
			<input
				type="number"
				placeholder="Age"
				value={age}
				onChange={(e) => {
					console.log(typeof e.target.valueAsNumber);
					setAge(e.target.value);
				}}
			/>

			<select
				name="gender"
				id=""
				value={gender}
				onChange={(e) => setGender(e.target.value)}
			>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
			</select>

			{/*  */}

			<p>
				Your name is {firstName}
				{lastName}
			</p>
			<p>Your age is {age}</p>
		</>
	);
}

export default App;
