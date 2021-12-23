import { Box, BoxNum, BoxText, Boxes } from './AcomplishmentsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

import React from 'react';

const data = [
	{ number: 20, text: 'Github' },
	{ number: 1000, text: 'Github' },
	{ number: 1900, text: 'Github ' },
	{ number: 5000, text: 'Github ' },
];

const Acomplishments = () => (
	<Section id="about" nopadding>
		<SectionTitle>Personal Achievements</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{`${card.number}+`}</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
		<SectionDivider />
	</Section>
);

export default Acomplishments;
