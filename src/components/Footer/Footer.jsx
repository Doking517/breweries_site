import React from 'react';

const Footer = () => {
	return (
		<div className="flex p-10 sm:p-10 sm:flex justify-between gap-[5%] sm:justify-between items-center bg-black/25 mt-[5%] sm:mt-[15%] ">
			<h1 className="font-extrabold font-poppins-extrabold text-3xl hover:text-[#d67f39] cursor-pointer duration-500">
				<a href="/">BCro's</a>
			</h1>
			<p className='sm:text-sm'>
				designed and coded by:{' '}
				<a href="https://github.com/Doking517/breweries_site">@Doking517</a>
			</p>
		</div>
	);
};

export default Footer;
