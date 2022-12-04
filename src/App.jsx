import React from 'react';
import Footer from './components/Footer/Footer';
import GlobalTitle from './components/globalTitle/gobalTitle';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Navbar from './components/Navbar/Navbar';
import OnlineOrder from './components/OnlineOrder/OnlineOrder';

const App = () => {
	return (
		<div className="bg-[#1e1e1e] p-10 sm:p-10 self-center text-white">
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
			<GlobalTitle titleText="How It Works." />
			<section className="sm:flex block sm:p-[5%] sm:gap-[5%] sm:justify-center items-center flex-1">
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
			<OnlineOrder
				buttonText="See Our FAQ"
				imagePath="../src/assets/img/portrait-fat-bearded-male-holds-beer-bottles_613910-9268.jpg"
				titleTitle="You will have the Embaras of choice regarding the quality of our products, all varieties are excellent for all occasions!"
				paragraphText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cumque eius eligendi officia ipsam, doloribus aperiam autem! Consectetur aperiam minima ut porro excepturi iure, voluptatem modi rerum nesciunt quam sequi?
            Eum debitis ea iste officia veniam maxime dolorem deleniti. Distinctio voluptatum itaque architecto unde voluptates iste. Quis magni voluptatum ipsum ab labore, explicabo facilis nam corrupti, veniam cupiditate aliquam id.
            Nesciunt tempore ea incidunt similique totam eum pariatur nisi, sapiente adipisci voluptatem vel, autem enim aliquam voluptatibus omnis porro quia sequi culpa quos quod mollitia nulla. Tempore repellendus similique sunt"
			/>
			<Footer />
		</div>
	);
};

export default App;
