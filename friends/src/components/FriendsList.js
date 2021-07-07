import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import NewFriendForm from './NewFriendForm';

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
				<NewFriendForm getData={this.getData} />
				<h1 className="title">Friends List</h1>
				<div className="friends">
					{this.state.friends.map((friend) => (
						<div className="friend">
							<h2>Name: {friend.name}</h2>
							<h3>Age: {friend.age}</h3>
							<h3>Email: {friend.email}</h3>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default FriendsList;
