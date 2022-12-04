import React from 'react';

const OnlineOrder = ({ imagePath, titleTitle, paragraphText, buttonText }) => {
	return (
		<div className="sm:flex sm:items-center sm:justify-center sm:gap-[5%] flex-row gap-[5%] mt-[5%] sm:px-10">
			<section className="sm:w-[45%] sm:h-[80%]">
				<h1 className="font-poppins-extrabold text-xl sm:text-4xl font-extrabold">
					{titleTitle}
				</h1>
				<p className="mt-[3%] text-justify font-poppins-regular sm:w-[95%] py-1">
					{paragraphText}
				</p>
				<button className="bg-[#d67f39] p-2 mt-[15px] mb-[15px] sm:p-3 w-auto sm:mt-[20px] transition duration-300 ease-in-out hover:bg-[#1F1F21] rounded-xl shadow-lg shadow-slate-400">
					{buttonText}
				</button>
			</section>
			<section className="mt-[15px]">
				<img
					src={imagePath}
					alt="image"
					className="rounded-xl sm:w-full"
				/>
			</section>
		</div>
	);
};

export default OnlineOrder;
