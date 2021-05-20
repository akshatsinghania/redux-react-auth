import React from 'react';
import Style from './Navbar.style';

//router
import { Link } from 'react-router-dom';

//redux
import { useSelector } from 'react-redux';

const Navbar = () => {
	const auth = useSelector((state) => state);

	return (
		<Style>
			<div className='navbar'>
				<Link to='/home'>
					<h1>react redux authentication</h1>
				</Link>

				{auth.authenticated ? (
					<h3 className='navbar__authState'>{auth.username}</h3>
				) : (
					<Link to='/auth/login'>Login</Link>
				)}
			</div>
		</Style>
	);
};

export default Navbar;
