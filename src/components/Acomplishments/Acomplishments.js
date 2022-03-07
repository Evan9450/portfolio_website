import { Box, BoxNum, BoxText, Boxes } from './AcomplishmentsStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

import React from 'react';

const data = [
	{
		label: 'GitLab Certified Associate',
		url: 'https://u16626658.ct.sendgrid.net/ls/click?upn=Smg0OV12w7AidGv-2Fy2WSIrkuESHuXWeUwEzEmUGKFTi12QcxYCx1QVy233DhrtkbTy-2BhUp3qmtxKLh8u0blw6yjWZmA-2Fe4FEjvKewIlLkro-3DebFn_JqNytvzu4acM4XvHZvV7DxciRex8WPg1v3WNjANHL3-2Baa8jUAJrwKF8timr7eKolNphOqpt0cbvloIuhb-2F9ko4BvhMaBa0wDYIk1zrLqMAdlLpNCyb31kOQg-2BifDaM8sGkRNAm4Wwb8OtaUrghF9x6-2FTQiy1NXHOZhuuNyXiLPxIsHoIzyybrvvxCtSwO901hporx07-2Bz9DbKZSlO1yJDw-3D-3D',
		img: 'https://media.badgr.com/uploads/badges/assertion-gGqZuEhBRoOl0z9QweROZQ.png',
	},
];

const Acomplishments = () => (
	<Section id="Achievements">
		<SectionTitle main className="numbered-heading">
			<span className="title-number">03.</span>Achievements
		</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<TransitionGroup component={null} key={card}>
					<CSSTransition timeout={0}>
						<a href={card.url} target="_blank">
							<Box key={index}>
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
		{/* <SectionDivider /> */}
	</Section>
);

export default Acomplishments;
