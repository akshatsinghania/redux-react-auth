import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Global components
import Navbar from '../components/Navbar/Navbar';

//pages
import Home from '../pages/Home/Home';

//routes
import Auth from './auth/Auth';

const Routes = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route exact path={'/auth'} component={Auth} />
					<Route exact path={['/', '/home']} component={Home} />
					<Route path={'*'}>
						<h1>404 not found</h1>
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default Routes;
