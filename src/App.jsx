import React from 'react';
import GlobalTitle from './components/globalTitle/gobalTitle';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Navbar from './components/Navbar/Navbar';

const App = () => {
	return (
		<div className="bg-[#1e1e1e] p-10 sm:p-10 w-[100vw] self-center text-white">
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
			<section className="sm:flex block p-[5%] sm:gap-[5%] sm:justify-center items-center flex-1">
				<HowItWorks
					imgPath="../src/assets/img/beer-usine-testing.jpg"
					titleCard="Our beers are the leaders of the market"
					textContent="architecto, ducimus voluptas commodi eum aperiam omnis doloribus atque
					reiciendis enim. Necessitatibus voluptate sunt id eos quam eius dolore
					laboriosam!"
				/>
				<HowItWorks
					imgPath="../src/assets/img/beer-service.jpg"
					titleCard="Distributed here and all over the world"
					textContent="architecto, ducimus voluptas commodi eum aperiam omnis doloribus atque
					reiciendis enim. Necessitatibus voluptate sunt id eos quam eius dolore
					laboriosam!"
				/>
				<HowItWorks
					imgPath="../src/assets/img/beer-sharing.jpg"
					titleCard="Drink it fresh with your friends and family"
					textContent="architecto, ducimus voluptas commodi eum aperiam omnis doloribus atque
					reiciendis enim. Necessitatibus voluptate sunt id eos quam eius dolore
					laboriosam!"
				/>
			</section>
		</div>
	);
};

export default App;
