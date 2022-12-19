import React from 'react';
import { useLocation } from 'react-router-dom';

const BreweryPageRender = () => {
	const location = useLocation();

	return (
		<div className="flex flex-col mt-56 justify-center items-center">
			<h1 className='text-3xl font-semibold p-5'>{location.state.elmt.name}'s Informations</h1>
			<div className="self-center text-white p-5 flex flex-col w-1/3 bg-amber-400 rounded-lg">
				<p>
					Name:{' '}
					{location.state.elmt.name ? location.state.elmt.name : '--No name--'}
				</p>
				<p>
					State:{' '}
					{location.state.elmt.state
						? location.state.elmt.state
						: '--No state--'}
				</p>
				<p>
					City:{' '}
					{location.state.elmt.city ? location.state.elmt.city : '--No city--'}
				</p>
				<p>
					Street:{' '}
					{location.state.elmt.street
						? location.state.elmt.street
						: '--No street--'}
				</p>
				<p>
					Postal Code:{' '}
					{location.state.elmt.postal_code
						? location.state.elmt.postal_code
						: '--No postal code--'}
				</p>
				<p>
					Created at:{' '}
					{location.state.elmt.created_at
						? location.state.elmt.created_at
						: '--/--/--'}
				</p>
				<p>
					Phone:{' '}
					{location.state.elmt.phone
						? location.state.elmt.phone
						: '--No phone--'}
				</p>
			</div>
		</div>
	);
};

export default BreweryPageRender;
