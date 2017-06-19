import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

import Profile from './pages/Profile';


const AddReview = () => <div><h1>AddReview</h1></div>

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Profile} />
			<Route path="/add" component={AddReview}></Route>
		</Switch>
	</Router>
)

export default Routes;
