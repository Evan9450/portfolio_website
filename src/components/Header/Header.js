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
import Image from 'next/image';
import SideBar from '../SideBar/SideBar';
import { navLinks } from '../../config';

// import Logo from '../../static/Logo.png';

const Header = () => {
	const [click, setClick] = useState(false);

	const [button, setButton] = useState(true);
	const [menuOpen, setMenuOpen] = useState(false);
	// const myLoader = ({ src, width, quality }) => {
	// 	return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
	// };
	return (
		<StyledHeader>
			<NavbarContainer>
				<div className="logo">
					<a href="/" style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
						<img src="./logo.png" style={{ height: '100%', width: '100%', marginLeft: '20px' }} />
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
						{/* {button ? ( */}
						<NavBtnLink to="../../static/resume.pdf">
							<Button primary>Resume</Button>
						</NavBtnLink>
						{/* // ) : (
						// 	<NavBtnLink to="../../static/resume.pdf">
						// 		<Button
						// 			fontBig
						// 			primary
						// 		>
						// 			Resume
						// 		</Button>
						// 	</NavBtnLink>
						// )} */}
					</NavItemBtn>
				</NavMenu>
				{/* <TransitionGroup component={null}>
					<CSSTransition>
						<SideBar />
					</CSSTransition>
				</TransitionGroup> */}
			</NavbarContainer>
		</StyledHeader>
	);
};

export default Header;
