import React from 'react';
import CommentList from './CommentList';

export default class Article extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
	}

	render() {
		const { article } = this.props;
		const { isOpen } = this.state;
		const { comments } = article;
		const section = isOpen ?
			<section>
				{article.text}
				<CommentList comments={comments} />
			</section> : null;
		return (
			<div>
				<h3>{article.title}</h3>
				<button onClick={this.toggleOpen}>
					{ isOpen ? 'close' : 'open' }
				</button>
				{ section }
			</div>
		);
	}
	
	toggleOpen = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
};
