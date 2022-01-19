import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';

import PropTypes from 'prop-types';
import React from 'react';

const Icon = ({ name }) => {
	switch (name) {
		case 'GitHub':
			return <AiFillGithub />;
		case 'Instagram':
			return <AiFillInstagram />;
		case 'Linkedin':
			return <AiFillLinkedin />;
		case 'Front-End':
			return <DiReact />;
		case 'Back-End':
			return <DiFirebase />;
		case 'UI/UX':
			return <DiZend />;

		// default:
		//     return <IconExternal />;
	}
};

// Icon.propTypes = {
// 	name: PropTypes.string.isRequired,
// };

export default Icon;
