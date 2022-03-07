import Icon from '../Icon/Icon';
import React from 'react';
import Side from './Side';
import { SocialList } from './style';
import { socialMedia } from '../../config';

const Social = () => {
	return (
		<Side orientation="left">
			<SocialList>
				{/* <ul> */}
				{socialMedia &&
					socialMedia.map(({ name, url }, i) => (
						<li key={i}>
							<a href={url} aria-label={name} target="_blank">
								<Icon name={name} />
							</a>
						</li>
					))}
				{/* </ul> */}
			</SocialList>
		</Side>
	);
};

export default Social;
