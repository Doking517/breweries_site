import React from 'react';
import GlobalTitle from './components/globalTitle/gobalTitle';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

const App = () => {
	return (
		<div className="bg-[#1e1e1e] p-10 w-[100vw] self-center text-white">
			<Navbar />

			<Hero
				title={'Breweries Companeros'}
				text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nisi
					architecto, ducimus voluptas commodi eum aperiam omnis doloribus atque
					reiciendis enim. Necessitatibus voluptate sunt id eos quam eius dolore
					laboriosam!"
				textButton={'Place an order'}
				imagePath="../src/assets/img/top-view-shot-glass-lager-beer-with-cup-peanuts-metal-screen-tray_181624-59484.jpg"
			/>
			<GlobalTitle titleText="How It Works" />
		</div>
	);
};

export default App;
