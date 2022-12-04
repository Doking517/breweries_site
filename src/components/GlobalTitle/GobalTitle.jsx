import React from 'react';

const GlobalTitle = ({ titleText }) => {
	return (
		<div className="flex justify-center items-center mt-[10%]">
			<h1 className="text-2xl sm:text-6xl font-extrabold font-poppins-extrabold">
				{titleText}
			</h1>
		</div>
	);
};

export default GlobalTitle;
