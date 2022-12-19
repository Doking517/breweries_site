import React from 'react';
import { useState, useEffect } from 'react';
import BrewerieCard from '../BrewerieCard/BrewerieCard';

const BrowseOurMenu = () => {
	const [breweries, setBreweries] = useState(null);

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

	return (
		<div className="flex text-white font-extrabold">
			{breweries && <BrewerieCard breweries={breweries} />}
		</div>
	);
};

export default BrowseOurMenu;
