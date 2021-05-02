import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Main from './Main';

function Routes() {
	let page = '/';
	return (
		<Router>
			<Switch>
				<Route path={page} exact component={Login} />
				<Route path='/home' exact component={Main} />
			</Switch>
		</Router>
	);
}

export default Routes;
