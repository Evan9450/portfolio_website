import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineFire } from 'react-icons/ai';
import {
	Button,
	Container,
	Div1,
	Div2,
	Div3,
	Nav,
	NavBtnLink,
	NavItem,
	NavItemBtn,
	NavLink,
	NavLinks,
	NavLogo,
	NavMenu,
	NavbarContainer,
	StyledHeader,
} from './HeaderStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { useEffect, useState } from 'react';

import { DiDigitalOcean } from 'react-icons/di';
import Icon from '../icons/Icon';
import { IconContext } from 'react-icons/lib';
import Link from 'next/link';
import SideBar from '../SideBar/SideBar';
import { navLinks } from '../../config';

const Header = () => {
	const [click, setClick] = useState(false);

	const [button, setButton] = useState(true);
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<StyledHeader>
			<NavbarContainer>
				{/* <Div1> */}
				<NavLogo href="/">
					{/* <Link> */}
					<a style={{ display: 'flex', alignItems: 'center', color: 'white', size: '3rem' }}>
						<AiOutlineFire size="3rem" color="red" /> <span>Evan</span>
					</a>
					{/* </Link> */}
				</NavLogo>
				{/* </Div1> */}
				{/* <Div2>
				<li>
					<Link href="#projects">
						<NavLink>Projects</NavLink>
					</Link>
				</li>
				<li>
					<Link href="#tech">
						<NavLink>Technologies</NavLink>
					</Link>
				</li>
				<li>
					<Link href="#about">
						<NavLink>About</NavLink>
					</Link>
				</li>
			</Div2> */}
				<NavMenu click={click} menuOpen={menuOpen}>
					{navLinks &&
						navLinks.map(({ url, name }, i) => (
							<CSSTransition key={i}>
								<NavItem key={i}>
									<NavLinks href={url}>{name}</NavLinks>
								</NavItem>
							</CSSTransition>
						))}
					<NavItemBtn>
						{button ? (
							<NavBtnLink to="../../static/resume.pdf">
								<Button primary>Resume</Button>
							</NavBtnLink>
						) : (
							<NavBtnLink to="../../static/resume.pdf">
								<Button
									// onClick={closeMobileMenu}
									fontBig
									primary
								>
									Resume
								</Button>
							</NavBtnLink>
						)}
					</NavItemBtn>
				</NavMenu>
				<TransitionGroup component={null}>
					<CSSTransition>
						<SideBar />
					</CSSTransition>
				</TransitionGroup>
			</NavbarContainer>
		</StyledHeader>
	);
};

export default Header;
