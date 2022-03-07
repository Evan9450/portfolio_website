import { Container } from './LayoutStyles';
import Email from '../components/Side/Email';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import React from 'react';
import Social from '../components/Side/Social';

export const Layout = ({ children }) => {
	return (
		<Container>
			<Header />
			<Social />
			<Email />
			<main>
				{children}
				<Footer />
			</main>
		</Container>
	);
};
