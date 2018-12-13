import React from 'react';
import { getCurrentUser, allUserPrompts, allUserChapters, allUserStories } from '../../ajax-helpers.js';

export default class ViewUserContributions extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			currentUser: this.props.currentUser,
			token: this.props.token,
			prompts: [],
			chapters: [],
			stories: [],
		}
	}

	async componentDidMount(){
		this.setState({
			token: this.props.token,
		})
		await this.getUserContributions();
	}

	async getUserContributions(){
		const prompts = await allUserPrompts(this.state.token);
		const chapters = await allUserChapters(this.state.token);
		const stories = await allUserStories(this.state.token);
		this.setState({
			prompts,
			chapters,
			stories,
		})
	};

	render(){
		return(
			<div>
				<h1>Contributions</h1>
			</div>
		)
	}
};
