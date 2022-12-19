import React from 'react';

const Pagination = ({
	totalPosts,
	postsPerPage,
	setCurrentPage,
	currentPage,
}) => {
	let pages = [];

	for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
		pages.push(i);
	}
	return (
		<div className="lg:flex lg:items-center lg:gap-5 lg:justify-center mt-5 lg:mx-5">
			{pages.map((page, index) => (
				<button
					className={
						page == currentPage ? 'bg-amber-400 p-3 border border-white' : 'p-3'
					}
					key={index}
					onClick={() => setCurrentPage(page)}
				>
					{page}
				</button>
			))}
		</div>
	);
};

export default Pagination;
