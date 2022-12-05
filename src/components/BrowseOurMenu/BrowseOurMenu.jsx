import React from 'react';
import { useState, useEffect } from 'react';

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
				console.log(breweries);
			});
	}, []);

	return (
		<div>
			<h1 className="text-red-500">Browse our menu</h1>
		</div>
	);
};

export default BrowseOurMenu;
