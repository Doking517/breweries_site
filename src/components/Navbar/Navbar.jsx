import React from 'react';

const Navbar = () => {
	return (
		<div className="flex items-center justify-around gap-[30%]  text-white">
			<h1 className="font-extrabold font-mono text-3xl hover:text-[#d67f39] cursor-pointer">
				BCro's
			</h1>

			<ul className="flex items-center justify-between gap-10 ">
				<li>
					<a
						href="/"
						className="hover:text-[#d67f39]"
					>
						Home
					</a>
				</li>
				<li>
					<a
						href="/order"
						className="hover:text-[#d67f39]"
					>
						Order
					</a>
				</li>
				<li>
					<a
						href="/compagny"
						className="hover:text-[#d67f39]"
					>
						Compagny
					</a>
				</li>
				<li>
					<a
						href="/contact"
						className="hover:text-[#d67f39]"
					>
						Contact
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
