// import { DiFirebase, DiReact, DiZend } from 'react-icons/di';

import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import Icon from '../icons/Icon';
import React from 'react';
import { Tech } from '../../constants/constants';

const Technologies = () => (
	<Section id="tech">
		<SectionTitle main className="numbered-heading">
			<span className="title-number">02.</span>Technologies
		</SectionTitle>
		<SectionText style={{ maxWidth: '100%' }}>
			I've worked with a range of technologies in the web development world. From Back-end To Design
		</SectionText>
		<List>
			{Tech.map(({ title, text }) => (
				<ListItem>
					<picture>
						<Icon name={title} size="3rem" />
					</picture>
					<ListContainer>
						<ListTitle>{title}</ListTitle>
						<ListParagraph>{text}</ListParagraph>
					</ListContainer>
				</ListItem>
			))}
		</List>
	</Section>
);

export default Technologies;
