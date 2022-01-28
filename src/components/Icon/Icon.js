import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { HiDatabase, HiPhotograph } from 'react-icons/hi';

import { BsEmojiSmile } from 'react-icons/bs';
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
			return <HiPhotograph />;
		case 'Back-End':
			return <HiDatabase />;
		case 'UI/UX':
			return <BsEmojiSmile />;
	}
};

export default Icon;
