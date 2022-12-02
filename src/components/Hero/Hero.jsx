import React from 'react';

const Hero = ({ title, text, textButton, imagePath }) => {
	return (
		<div className="Hero block gap-2 sm:flex sm:items-center sm:justify-evenly text-white mt-[2%] sm:mt-[5%] sm:gap-5">
			<section className="Hero-left">
				<h1 className="sm:text-4xl text-2xl mb-2 font-bold sm:mb-8 font-mono">
					{title}
				</h1>
				<p className="text-justify w-[70%] sm:w-[500px] mb-2">{text}</p>
				<button className="bg-[#d67f39] p-3 w-auto mt-[20px] rounded-xl shadow-lg shadow-slate-400">
					{textButton}
				</button>
			</section>
			<section className="Hero-right w-[45%] sm:w-[35%]">
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
