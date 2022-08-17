import React from "react";

const LetterSelect = ({ handleLetterSelected, letter }) => {
	return (
		<div
			className="ml-3 inline-flex rounded-md shadow cursor-pointer m-2"
			onClick={() => handleLetterSelected(letter)}
		>
			<p className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
				{letter}
			</p>
		</div>
	);
};

export default LetterSelect;
