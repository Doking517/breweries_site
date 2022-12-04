import React from 'react';

const HowItWorks = ({ imgPath,textContent }) => {
	return (
		
			<section className="block">
				<div>
					<img
						src={imgPath}
						alt="image"
					/>
					<p>
						{textContent}
					</p>
				</div>
			</section>
		
	);
};

export default HowItWorks;
