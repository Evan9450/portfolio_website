import { FooterLink, FooterWrapper, StyledCredit } from './FooterStyles';

import Icon from '../Icon/Icon';
import React from 'react';
import { socialMedia } from '../../config';

const Footer = () => (
	<FooterWrapper>
		<FooterLink>
			<ul>
				{socialMedia &&
					socialMedia.map(({ name, url }, i) => (
						<li key={i}>
							<a href={url} aria-label={name} target="_blank">
								<Icon name={name} />
							</a>
						</li>
					))}
			</ul>
		</FooterLink>
		<StyledCredit>
			<small className="website-rights">Designed and build by Evan (Liang) Shi </small>
		</StyledCredit>
	</FooterWrapper>
);

export default Footer;
