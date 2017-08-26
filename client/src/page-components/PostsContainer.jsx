import React from 'react';
import axios from 'axios';
import Posts from '../components/Posts.jsx';
import FloatingActionButton from 'material-ui/FloatingActionButton';

class PostsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			likes:[]
		}
		this.getAllPosts();
		this.getLikes = this.getLikes.bind(this);
	}

	getAllPosts() {
		axios.get('/api/posts')
		.then(res => {
			this.setState({
				posts: res.data
			});
		});
	}
	getLikes(){
		axios.get('/api/likes')
		.then(res => {
			console.log('this is the response',res);
			this.setState({
				likes: res.data
			})
		})
		console.log('likes', this.state.likes);
	}
	render() {
		return (
			<div>
				<div>Welcome to TrekTracker!</div>
				<Posts posts={this.state.posts} />
					<FloatingActionButton
						onClick = {this.getLikes}>
					</FloatingActionButton>
			</div>
		);
	}
}

export default PostsContainer;
