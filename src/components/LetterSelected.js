import React from "react";

const LetterSelected = ({ handleLetterSelected, letter }) => {
	return (
		<div className="inline-flex rounded-md shadow cursor-pointer m-2" onClick={() => handleLetterSelected(letter)}>
			<p className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
				{letter}
			</p>
		</div>
	);
};

export default LetterSelected;
