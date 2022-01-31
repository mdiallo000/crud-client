import React from "react";
import "./Info.css";
function Info() {
	return (
		<div className='container'>
			<form className='form-container' action=''>
				<label htmlFor='name'>Name:</label>
				<input type='text' name='name' id='' />
				<label htmlFor='age'>Age:</label>
				<input type='number' name='age' id='' />
				<label htmlFor='country'>Country:</label>
				<input type='text' name='country' id='' />
				<label htmlFor='positon'>Positon:</label>
				<input type='text' name='positon' id='' />
				<label htmlFor='wage'>Wage(year):</label>
				<input type='number' name='wage' id='' />
				<button className='btn'>Submit</button>
			</form>
		</div>
	);
}

export default Info;
