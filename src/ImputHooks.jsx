import { useState } from "react";

export default (initValue) => {
	const [value, setValue] = useState(initValue);

	const control = (e) => {
		setValue(e.target.value);
	};
	const reset = () => {
		setValue("");
	};

	return [value, control, reset];
};
