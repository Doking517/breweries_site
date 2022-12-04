import React from 'react';

const Hero = ({ title, text, textButton, imagePath }) => {
	return (
		<div className="Hero w-[100%] sm:w-[100%] block gap-2 sm:flex sm:items-center sm:justify-evenly text-white mt-[10%] sm:mt-[8%] sm:gap-5">
			<section className="Hero-left  sm:w-[35%]">
				<h1 className="sm:text-4xl text-2xl mb-2 font-extrabold sm:mb-9 font-poppins-extrabold">
					{title}
				</h1>
				<p className="text-justify w-[90%] sm:w-[90%] mb-2">{text}</p>
				<button className="bg-[#d67f39] p-2 mt-[10px] sm:p-3 w-auto sm:mt-[20px] transition duration-300 ease-in-out hover:bg-[#1F1F21] rounded-xl shadow-lg shadow-slate-400">
					{textButton}
				</button>
			</section>
			<section className="Hero-right flex items-center justify-center w-[95%] mt-[20%] sm:mt-0 sm:w-[35%]">
				<img
					src={imagePath}
					alt="image"
					className="rounded-xl"
				/>
			</section>
		</div>
	);
};

export default Hero;
