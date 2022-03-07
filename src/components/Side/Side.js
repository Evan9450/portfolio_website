// import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { useEffect, useState } from 'react';

import { SideElement } from './style';

const Side = ({ children, isHome, orientation }) => {
	// const [isMounted, setIsMounted] = useState(!isHome);
	// const prefersReducedMotion = usePrefersReducedMotion();

	// useEffect(() => {
	// 	if (!isHome || prefersReducedMotion) {
	// 		return;
	// 	}
	// 	const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
	// 	return () => clearTimeout(timeout);
	// }, []);

	return (
		<SideElement orientation={orientation}>
			<TransitionGroup component={null}>
				<CSSTransition timeout={0}>{children}</CSSTransition>
			</TransitionGroup>
		</SideElement>
	);
};

export default Side;
