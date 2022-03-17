import {
	Button,
	NavBtnLink,
	NavItem,
	NavItemBtn,
	NavLinks,
	NavMenu,
	NavbarContainer,
	StyledHeader,
} from './HeaderStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { useEffect, useState } from 'react';

import SideBar from '../SideBar/SideBar';
import { navLinks } from '../../../config';
import { useScrollDirection } from '../hooks';

const Header = () => {
	const [click, setClick] = useState(false);
	const scrollDirection = useScrollDirection('down');
	const [scrolledToTop, setScrolledToTop] = useState(true);

	const [menuOpen, setMenuOpen] = useState(false);

	const handleScroll = () => {
		setScrolledToTop(window.pageYOffset < 50);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
			<NavbarContainer>
				<div className="logo">
					<a href="/" style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
						<img src="./logo.png" style={{ height: '100%' }} />
					</a>
				</div>
				<NavMenu click={click} menuOpen={menuOpen}>
					{navLinks &&
						navLinks.map(({ url, name }, i) => (
							<CSSTransition key={i} timeout={200}>
								<NavItem key={i}>
									<NavLinks href={url}>{name}</NavLinks>
								</NavItem>
							</CSSTransition>
						))}
					<NavItemBtn>
						<NavBtnLink target="_blank" href="/resume.pdf" rel="noopener noreferrer">
							<Button primary>Resume</Button>
						</NavBtnLink>
					</NavItemBtn>
				</NavMenu>
				<TransitionGroup component={null}>
					<CSSTransition timeout={200}>
						<SideBar />
					</CSSTransition>
				</TransitionGroup>
			</NavbarContainer>
		</StyledHeader>
	);
};

export default Header;
