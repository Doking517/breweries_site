import React from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

const App = () => {
	return (
		<div className="bg-[#1e1e1e] p-10">
			<Navbar />

			<Hero
				title={'Breweries Companeros'}
				text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nisi
					architecto, ducimus voluptas commodi eum aperiam omnis doloribus atque
					reiciendis enim. Necessitatibus voluptate sunt id eos quam eius dolore
					laboriosam!"
				textButton={'Place an order'}
				imagePath="../src/assets/img/close-up-beer-mug-with-sausages.jpg"
			/>
		</div>
	);
};

export default App;
