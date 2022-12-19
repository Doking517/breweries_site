import React from 'react';
import { useState, useEffect } from 'react';
import BrewerieCard from '../BrewerieCard/BrewerieCard';
import Pagination from '../Pagination/Pagination';

const BrowseOurMenu = () => {
	const [breweries, setBreweries] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(12);

	let apiURL = 'https://api.openbrewerydb.org/breweries?per_page=50';

	useEffect(() => {
		fetch(apiURL)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setBreweries(data);
			})
			.catch((err) => {
				throw err;
			});
	}, []);

	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
	const currentPosts = breweries.slice(firstPostIndex,lastPostIndex)
	return (
		<div className="flex flex-col text-white font-extrabold ">
			{breweries && <BrewerieCard breweries={currentPosts} />}
			<Pagination
				totalPosts={breweries.length}
				postsPerPage={postsPerPage}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
		</div>
	);
};

export default BrowseOurMenu;
