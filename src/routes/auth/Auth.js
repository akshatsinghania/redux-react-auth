import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

//pages
import Login from '../../pages/Auth/Login';

const Auth = () => {
	const { path } = useRouteMatch();
	return (
		<div>
			<Switch>
				<Route path={`${path}/login`} component={Login} />
			</Switch>
		</div>
	);
};

export default Auth;
