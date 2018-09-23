import React from 'react';

export default class CommentList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};
	}

	toggleOpen = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		const { comments } = this.props;
		const { isOpen } = this.state;
		const commentElems = isOpen ? comments.map(item => <li key={item.id}><b>{item.user}: </b>{item.text}</li>) : null;
		return (
			<div>
				<button onClick={this.toggleOpen}>{isOpen ? 'close comments' : 'open comments'}</button>
				<ol>
					{commentElems}
				</ol>
			</div>
		);
	}
};
