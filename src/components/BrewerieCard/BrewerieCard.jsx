import React from 'react';
import { useNavigate } from 'react-router-dom';

const BrewerieCard = ({ breweries }) => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col lg:grid lg:grid-cols-4 place-content-center lg:grid-rows-4 gap-4">
			{breweries.map((elmt, idx) => (
				<div
					className="p-5 flex flex-col bg-amber-400 rounded-lg shadow-md shadow-slate-400"
					key={idx}
					onClick={() => navigate("render", {state:{elmt: elmt}})}
				>
					<h1 className="text-white font-extrabold">Name: {elmt.name}</h1>
					<p>state: {elmt.state}</p>
					<p className='text-center pt-5 text-gray-800 font-bold'>More infos..</p>
				</div>
			))}
		</div>
	);
};

export default BrewerieCard;
