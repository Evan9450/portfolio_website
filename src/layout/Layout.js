import { Container, StyledMainContainer } from './LayoutStyles';

import Email from '../components/Side/Email';
import Footer from '../components/common/Footer/Footer';
import Header from '../components/common/Header/Header';
import React from 'react';
import Social from '../components/Side/Social';

export const Layout = ({ children }) => {
	return (
		<Container>
			<Header />
			<Social />
			<Email />
			<StyledMainContainer>
				{children}
				<Footer />
			</StyledMainContainer>
		</Container>
	);
};
