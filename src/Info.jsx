import React from "react";

function Info() {
	return (
		<div>
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
		</div>
	);
}

export default Info;
