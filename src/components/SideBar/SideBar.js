import React, { useEffect, useRef, useState } from 'react';
import { SideBarWrapper, StyledHamburgerButton, StyledMenu } from './style';

import { Helmet } from 'react-helmet';
import { KEY_CODES } from '../utilities';
import Link from 'next/link';
import { navLinks } from '../../config';
import { useOnClickOutside } from '../hooks';

// import { Link } from 'gatsby';

const SideBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	const buttonRef = useRef(null);
	const navRef = useRef(null);

	let menuFocusables;
	let firstFocusableEl;
	let lastFocusableEl;

	const setFocusables = () => {
		menuFocusables = [buttonRef.current, ...Array.from(navRef.current.querySelectorAll('a'))];
		firstFocusableEl = menuFocusables[0];
		lastFocusableEl = menuFocusables[menuFocusables.length - 1];
	};

	const handleBackwardTab = (e) => {
		if (document.activeElement === firstFocusableEl) {
			e.preventDefault();
			lastFocusableEl.focus();
		}
	};

	const handleForwardTab = (e) => {
		if (document.activeElement === lastFocusableEl) {
			e.preventDefault();
			firstFocusableEl.focus();
		}
	};

	const onKeyDown = (e) => {
		switch (e.key) {
			case KEY_CODES.ESCAPE:
			case KEY_CODES.ESCAPE_IE11: {
				setMenuOpen(false);
				break;
			}

			case KEY_CODES.TAB: {
				if (menuFocusables && menuFocusables.length === 1) {
					e.preventDefault();
					break;
				}
				if (e.shiftKey) {
					handleBackwardTab(e);
				} else {
					handleForwardTab(e);
				}
				break;
			}

			default: {
				break;
			}
		}
	};

	const onResize = (e) => {
		if (e.currentTarget.innerWidth >= 640) {
			setMenuOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown);
		window.addEventListener('resize', onResize);

		setFocusables();

		return () => {
			document.removeEventListener('keydown', onKeyDown);
			window.removeEventListener('resize', onResize);
		};
	}, []);

	const wrapperRef = useRef();
	useOnClickOutside(wrapperRef, () => setMenuOpen(false));

	return (
		<StyledMenu>
			<Helmet>
				<body className={menuOpen ? 'blur' : ''} />
			</Helmet>

			<div ref={wrapperRef}>
				<StyledHamburgerButton onClick={toggleMenu} menuOpen={menuOpen} ref={buttonRef}>
					<div className="ham-box">
						<div className="ham-box-inner" />
					</div>
				</StyledHamburgerButton>

				<SideBarWrapper menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
					<nav ref={navRef}>
						{navLinks && (
							<ol>
								{navLinks.map(({ url, name }, i) => (
									<li key={i}>
										<Link href={url}>
											<a onClick={() => setMenuOpen(false)}>{name}</a>
										</Link>
									</li>
								))}
							</ol>
						)}

						<a target="_blank" href="/resume.pdf" rel="noopener noreferrer" className="resume-link">
							Resume
						</a>
					</nav>
				</SideBarWrapper>
			</div>
		</StyledMenu>
	);
};

export default SideBar;
