import { GetInTouch, HeroLink, HeroTitle, LeftSection } from './HeroStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import React from 'react';
import { email } from '../../config';

const Hero = () => (
	<Section className="hero" nopadding style={{ minHeight: 'calc(100vh - 80px)' }}>
		<LeftSection>
			<HeroTitle main center>
				<span className="greeting">Hi, my name is</span> <br />
				<span className="big-heading">Liang Shi</span>
			</HeroTitle>
			<SectionText>
				I am a software developer based in Adelaide, SA. Currently, I am focused on building user-friendly,
				human-centered and accessible products at{' '}
				<HeroLink href="https://outz.com.au/" target="_blank" rel="noreferrer">
					Outz
				</HeroLink>
				<br />
				<GetInTouch href={`mailto:${email}`} style={{ fontWeight: '600' }}>
					Get In Touch
				</GetInTouch>
			</SectionText>
		</LeftSection>
	</Section>
);

export default Hero;
