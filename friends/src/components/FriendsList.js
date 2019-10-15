import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
	state = {
		friends: []
	};

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		axiosWithAuth()
			.get('/api/friends')
			.then((response) => {
				console.log(response);
				this.setState({
					friends: response.data
				});
			})
			.catch((err) => console.log(err.response));
	};

	render() {
		return (
			<div>
				<h1>Friends List Component</h1>
				{this.state.friends.map((friend) => <h1>{friend.name}</h1>)}
			</div>
		);
	}
}

export default FriendsList;
