import React, { useState } from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
//redux actions
import { login, logout } from '../../redux/actions/Auth/Auth';

const Login = () => {
	const [username, setUsername] = useState('');
	//redux
	const auth = useSelector((s) => s);
	const dispatch = useDispatch();

	const loginUser = (e) => {
		e.preventDefault();
		dispatch(login({ username }));
	};
	const logoutUser = (e) => {
		dispatch(logout());
	};
	return (
		<div>
			{auth.authenticated ? (
				<button onClick={logoutUser}>Logout</button>
			) : (
				<form onSubmit={loginUser}>
					<input
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type='text'
						placeholder='username'
					/>
					<button type='submit'>Login</button>
				</form>
			)}
		</div>
	);
};

export default Login;
