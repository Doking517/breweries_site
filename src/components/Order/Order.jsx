import React from 'react';
import BrowseOurMenu from '../BrowseOurMenu/BrowseOurMenu';
import GlobalTitle from '../globalTitle/gobalTitle';


const Order = () => {
	return (
		<div className='px-10 sm:px-[10rem] flex flex-col justify-center items-center'>
			<GlobalTitle titleText='Get your Beer DELIVERED or PICK it in the Store...' className="text-center"/>
			<BrowseOurMenu />
		</div>
	);
};

export default Order;
