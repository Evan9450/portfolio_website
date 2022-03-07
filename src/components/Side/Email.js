import { LinkWrapper } from './style';
import React from 'react';
import Side from './Side';
import { email } from '../../config';

const Email = () => (
	<Side orientation="right">
		<LinkWrapper>
			<a href={`mailto:${email}`}>{email}</a>
		</LinkWrapper>
	</Side>
);

export default Email;
