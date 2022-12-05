import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';

import Navbar from './components/Navbar/Navbar';

const App = () => {
	return (
		<div className="bg-[#1e1e1e] p-10 sm:p-10 self-center text-white">
			<Router>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>
				</Routes>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
