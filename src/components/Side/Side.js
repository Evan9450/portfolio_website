// import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import React from 'react';
import { SideElement } from './style';

const Side = ({ children, orientation }) => {
	return (
		<SideElement orientation={orientation}>
			<TransitionGroup component={null}>
				<CSSTransition timeout={0}>{children}</CSSTransition>
			</TransitionGroup>
		</SideElement>
	);
};

export default Side;
