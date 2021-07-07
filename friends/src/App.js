import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<Router>
			<div className="App">
				<div className="links">
					<Link to="/login">
						<span className="link">Login</span>
					</Link>
					<Link to="/protected">
						<span className="link">Friends List</span>
					</Link>
				</div>

				<Switch>
					<PrivateRoute exact path="/protected" component={FriendsList} />
					<Route path="/login" component={Login} />
					<Route component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
