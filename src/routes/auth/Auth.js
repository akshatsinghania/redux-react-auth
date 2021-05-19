import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

//pages
import Login from '../../pages/Auth/Login';

const Auth = () => {
	const { path } = useRouteMatch();
	return (
		<Switch>
			<Route path={`${path}/login`} component={Login} />
		</Switch>
	);
};

export default Auth;
