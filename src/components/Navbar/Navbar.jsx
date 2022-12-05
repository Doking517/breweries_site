import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const responsiveMenuHandler = () => {
		let closeMenuIcon = document.querySelector('#closeIcon');
		let openMenuIcon = document.querySelector('#menuIcon');
		let elmt = document.getElementById('navmenu');
		elmt.classList.remove('hidden');
		elmt.classList.add('block');
		openMenuIcon.classList.remove('block');
		openMenuIcon.classList.add('hidden');
		closeMenuIcon.classList.remove('hidden');
	};
	const closeMenuHandler = () => {
		let openMenuIcon = document.querySelector('#menuIcon');
		let closeMenuIcon = document.querySelector('#closeIcon');
		let elmt = document.getElementById('navmenu');
		closeMenuIcon.classList.add('hidden');
		elmt.classList.add('hidden');
		openMenuIcon.classList.remove('hidden');
	};

	return (
		<div className="flex items-center justify-between sm:justify-evenly gap-[45%] sm:gap-[45%] text-white ">
			<h1 className="font-extrabold font-poppins-extrabold text-3xl text-[#d67f39] hover:text-white cursor-pointer duration-500">
				<a href="/">BCro's</a>
			</h1>
			{/* responsive menu icons start section */}
			<span
				className="block sm:hidden cursor-pointer z-[3] absolute ml-[70vw]"
				id="menuIcon"
				name="menuIcon"
				onClick={() => responsiveMenuHandler()}
			>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</span>

			<span
				className="hidden sm:hidden cursor-pointer z-[3] absolute ml-[70vw]"
				id="closeIcon"
				onClick={() => closeMenuHandler()}
			>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</span>
			{/* responsive icons section end */}

			<ul
				className="hidden self-center absolute sm:relative sm:flex sm:items-center sm:justify-center sm:gap-8 gap-4 transition-all ease-in duration-500 top-[10%] sm:top-0 bg-black bg-opacity-90 uppercase h-[55%] sm:h-auto sm:bg-inherit w-[75%] sm:w-auto py-3 sm:py-0 space-y-11 sm:space-y-0 pl-4 sm:pl-0 font-poppins-regular"
				id="navmenu"
				name="navmenu"
			>
				<li className="my-2 sm:my-0">
					<Link
						to="/"
						className="hover:text-[#d67f39] duration-500"
					>
						Home
					</Link>
				</li>
				<li className="my-2 sm:my-0">
					<Link
						to="/order"
						className="hover:text-[#d67f39] duration-500"
					>
						Order
					</Link>
				</li>
				<li className="my-2 sm:my-0">
					<Link
						to="/compagny"
						className="hover:text-[#d67f39] duration-500"
					>
						Compagny
					</Link>
				</li>
				<li className="my-2 sm:my-0">
					<Link
						to="/contact"
						className="hover:text-[#d67f39] duration-500"
					>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
