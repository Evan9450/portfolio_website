import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import PropTypes from 'prop-types';
import React from 'react';

// import {

const Icon = ({ name }) => {
	switch (name) {
		case 'GitHub':
			return <AiFillGithub />;
		case 'Instagram':
			return <AiFillInstagram />;
		case 'Linkedin':
			return <AiFillLinkedin />;

		// default:
		//     return <IconExternal />;
	}
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Icon;
