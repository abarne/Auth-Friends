import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
	return (
		<Router>
			<div className="App">
				<Link to="/login">Login</Link>
				<Link to="/protected">Friends List</Link>
				<Switch>
					<Route exact path="/protected" component={FriendsList} />
					<Route path="/login" component={Login} />
					<Route component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
