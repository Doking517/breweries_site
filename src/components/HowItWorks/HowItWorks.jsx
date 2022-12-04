import React from 'react';

const HowItWorks = ({ imgPath, textContent, titleCard }) => {
	return (
		<div className="w-[95%] sm:w-[25%] border-cyan-600 border-2 border-solid rounded-xl shadow-lg shadow-slate-400 mb-[8%] bg-black/20 -bottom-10 hover:bottom-0 opacity-100 hover:opacity-60 transition-all duration-300">
			<img
				src={imgPath}
				alt="image"
				className="rounded-tl-[0.5rem] rounded-tr-[0.5rem] w-full h-auto sm:w-full "
			/>
			<h1 className='font-poppins-regular font-extrabold text-center p-2 capitalize'>{titleCard}</h1>
			<p className=" mb-[10%] text-center p-2">{textContent}</p>
		</div>
	);
};

export default HowItWorks;
