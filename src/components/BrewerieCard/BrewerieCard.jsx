import React from 'react';
import { useNavigate } from 'react-router-dom';

const BrewerieCard = ({ breweries }) => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col gap-4">
			{breweries.map((elmt, idx) => (
				<div
					className="p-5 flex flex-col bg-amber-400 rounded-lg"
					key={idx}
					onClick={() => navigate("render", {state:{elmt: elmt}})}
				>
					<h1 className="text-white font-extrabold">Name: {elmt.name}</h1>
					<p>state: {elmt.state}</p>
				</div>
			))}
		</div>
	);
};

export default BrewerieCard;
