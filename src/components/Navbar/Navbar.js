import React from 'react';
import Style from './Navbar.style';

const Navbar = () => {
	return (
		<Style>
			<div className='navbar'>
				<h1>react redux authentication</h1>
				<h3 className='navbar__authState'>Login</h3>
				<h3>Logout</h3>
			</div>
		</Style>
	);
};

export default Navbar;
