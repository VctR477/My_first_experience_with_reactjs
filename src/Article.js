import React from 'react';

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
		const section = isOpen ? <section>{article.text}</section> : null;
		return (
			<div>
				<h3>{article.title}</h3>
				<button onClick={this.toogleOpen}>
					{ isOpen ? 'close' : 'open' }
				</button>
				{ section }
			</div>
		);
	}
	
	toogleOpen = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
};
