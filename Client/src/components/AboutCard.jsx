import React from 'react';
import { styled } from 'styled-components';
import { aboutLists } from '../data/aboutLists';

const AboutList = styled.li`
    margin: 10px 0;
`

const AboutCard = () => (
	<ul>
		{aboutLists.map(({ content, key }) => (
			<AboutList key={key}>{content}</AboutList>
		))}
	</ul>
);

export default AboutCard;
