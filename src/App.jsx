import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';

import Navbar from './components/Navbar/Navbar';
import Order from './components/Order/Order';
import BreweryPageRender from './components/BreweryPageRender/BreweryPageRender';

const App = () => {
	return (
		<div className="bg-[#1e1e1e] p-10 sm:p-10  flex flex-col justify-center sm:flex sm:flex-col sm:justify-center  text-white">
			<Router>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/Order"
						element={<Order />}
					/>
					<Route
						path="/Order/Render"
						element={<BreweryPageRender />}
					/>
				</Routes>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
