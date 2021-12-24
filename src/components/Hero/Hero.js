import { GetInTouch, LeftSection } from './HeroStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import Button from '../../styles/GlobalComponents/Button';
import React from 'react';

const Hero = () => (
	<Section nopadding style={{ marginTop: '80px' }}>
		<LeftSection>
			<SectionTitle main center>
				Welcome To <br />
				Evan's Portfolio
			</SectionTitle>
			<SectionText>
				I am a software developer based in Adelaide, SA. Currently, I am focused on building user-friendly,
				human-centered and accessible products at{' '}
				<a
					href="https://outz.com.au/"
					target="_blank"
					rel="noreferrer"
					style={{
						color: '#ff0000',
						fontFamily: 'Open Sans',
						fontWeight: '500',
					}}
				>
					Outz
				</a>
				<br />
				<GetInTouch href={`mailto:evan9450@gmail.com`} style={{ fontWeight: '600' }}>
					Get In Touch
				</GetInTouch>
			</SectionText>
		</LeftSection>
	</Section>
);

export default Hero;
