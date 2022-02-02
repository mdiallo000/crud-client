import React from "react";
import "./Info.css";
import ImputHooks from "./ImputHooks";
import Axios from "axios";
function Info() {
	const [nameValue, setName, resetName] = ImputHooks("");
	const [ageValue, setAge, resetAge] = ImputHooks(0);
	const [countryValue, setCountry, resetCountry] = ImputHooks("");
	const [positionValue, setPosition, resetPosition] = ImputHooks("");
	const [wageValue, setWage, resetWage] = ImputHooks(0);

	// const DisplayValues = () => {
	// 	console.log(
	// 		nameValue + ageValue + countryValue + positionValue + wageValue
	// 	);
	// };

	const addEmployeData = () => {
		Axios.post("http://localhost:3001/create", {
			name: nameValue,
			age: ageValue,
			country: countryValue,
			position: positionValue,
			wage: wageValue,
		}).then(() => {
			console.log("IT WAS A SUCCESS");
		});
	};

	return (
		<div className='container'>
			<form
				className='form-container'
				action=''
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<label htmlFor='name'>Name:</label>
				<input
					type='text'
					name='name'
					id=''
					onChange={setName}
					value={nameValue}
				/>
				<label htmlFor='age'>Age:</label>
				<input
					type='number'
					name='age'
					id=''
					onChange={setAge}
					value={ageValue}
				/>
				<label htmlFor='country'>Country:</label>
				<input
					type='text'
					name='country'
					id=''
					onChange={setCountry}
					value={countryValue}
				/>
				<label htmlFor='positon'>Positon:</label>
				<input
					type='text'
					name='positon'
					id=''
					onChange={setPosition}
					value={positionValue}
				/>
				<label htmlFor='wage'>Wage(year):</label>
				<input
					type='number'
					name='wage'
					id=''
					onChange={setWage}
					value={wageValue}
				/>
				<button
					className='btn'
					onClick={() => {
						addEmployeData();
						resetName("");
						resetCountry("");
						resetAge("");
						resetPosition("");
						resetWage("");
					}}
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Info;
