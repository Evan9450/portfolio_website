import { FooterLink, FooterWrapper, StyledCredit } from './FooterStyles';

import Icon from '../icons/Icon';
import React from 'react';
import { socialMedia } from '../../config';

const Footer = () => (
	<FooterWrapper>
		<FooterLink>
			<ul>
				{socialMedia &&
					socialMedia.map(({ name, url }, i) => (
						<li key={i}>
							<a href={url} aria-label={name}>
								<Icon name={name} />
							</a>
						</li>
					))}
			</ul>
		</FooterLink>
		<StyledCredit>
			<small className="website-rights">Designed and build by Evan Shi </small>
		</StyledCredit>
	</FooterWrapper>
);

export default Footer;
