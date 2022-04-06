import { Box, BoxNum, BoxText, Boxes } from './AcomplishmentsStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Section, SectionTitle } from '../../styles/GlobalComponents';

import { Achievements } from '../../constants/constants';
import React from 'react';

const Acomplishments = () => (
	<Section id="Achievements">
		<SectionTitle main className="numbered-heading">
			Achievements
		</SectionTitle>
		<Boxes>
			{Achievements.map((card, index) => (
				<TransitionGroup component={null} key={card}>
					<CSSTransition timeout={0}>
						<a href={card.url} target="_blank">
							<Box key={index} style={{ transitionDelay: '100ms' }}>
								<BoxNum>{`${card.label}`}</BoxNum>
								<BoxText>
									<img src={card.img} alt={card.label} style={{ width: '50px', height: '50px' }} />
								</BoxText>
							</Box>
						</a>
					</CSSTransition>
				</TransitionGroup>
			))}
		</Boxes>
	</Section>
);

export default Acomplishments;
