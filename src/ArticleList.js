import React from 'react';
import Article from './Article';

export default function ArticleList({ articles }) {
	const articleElems = articles.map(item => <li key={item.id}><Article article = {item} /></li>);
	return (
		<ul>
			{articleElems}
		</ul>
	);
};
