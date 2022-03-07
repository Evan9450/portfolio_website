import { Container } from '../../styles/GlobalComponents/index';
import { IoIosArrowDropdown } from 'react-icons/io';
import Link from 'next/link';
import styled from 'styled-components';

export const StyledHeader = styled.header`
	background: rgba(24, 24, 24);
	height: 80px;
	font-size: 1.2rem;
	/* position: fixed; */
	padding: 0px 50px;
	top: 0;
	z-index: 11;
	transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
	width: 100%;
	backdrop-filter: blur(10px);
	filter: none !important;
	@media (max-width: 1080px) {
		padding: 0 40px;
	}
	@media (max-width: 768px) {
		padding: 0 25px;
	}

	${(props) =>
		props.scrollDirection === 'up' &&
		!props.scrollToTop &&
		css`
			height: 80px;
			transform: translateY(0px);
			background-color: rgba(24, 24, 24, 0.7);
			box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.7);
		`}
	${(props) =>
		props.scrollDirection === 'down' &&
		!props.scrollToTop &&
		css`
			height: 80px;
			transform: translateY(calc(-80px) * -1);

			box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.7);
		`}
        @media screen and (max-width: 768px) {
		transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	/* align-items: center; */
	position: relative;
	height: 100%;

	color: #ff0000;
	/* font-family: var(--font-mono); */
	counter-reset: item 0;
	z-index: 12;
	.logo {
		display: flex;
		justify-content: center;
		align-items: center;

		a {
			color: #ff0000;
			width: 42px;
			height: 42px;
		}
	}
`;

export const NavLogo = styled.a`
	color: #fff;
	/* justify-self: flex-start; */
	cursor: pointer;
	text-decoration: none;
	font-size: 1.8rem;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;

	&:hover,
	&:focus {
		color: #ff0000;
	}
`;

// Navigation Links
export const NavLink = styled.a`
	font-size: 2rem;
	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);
	transition: 0.4s ease;
	&:hover {
		color: #fff;
		opacity: 1;
		cursor: pointer;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.5rem;
	}
`;

export const NavMenu = styled.ol`
	display: flex;
	align-items: center;
	text-align: center;
	list-style: none;
	margin: 0;
	padding: 0;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const NavItem = styled.li`
	/* display: inline-block; */
	margin: 0 5px;
	position: relative;
	counter-increment: item 1;
	font-size: 13px;

	/* &:hover {
		border-bottom: 2px solid #4b59f7;
	} */

	@media screen and (max-width: 768px) {
		display: flex;
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;
export const NavLinks = styled.a`
	/* padding: 10px; */

	color: #fff;
	display: flex;
	align-items: center;

	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	&:hover,
	&:active,
	&:focus {
		color: #ff0000;
		outline: 0;
	}
	&:before {
		content: '0' counter(item) '.';
		margin-right: 5px;
		color: #ff0000;
		text-align: right;
	}
	&:after {
		box-sizing: inherit;
	}

	@media screen and (max-width: 768px) {
		font-size: 18px;
		text-align: center;
		padding: 2rem;
		width: 100%;
		/* display: flex !important; */
		flex-direction: column;
		justify-content: center;
		list-style: none;

		&:hover {
			color: #ff0000;
			transition: all 0.3s ease;
		}
	}
`;

export const Button = styled.div`
	color: #ff0000;
	background-color: transparent;
	border: 1px solid #ff0000;
	border-radius: 4px;
	padding: 1.25rem 1.75rem;
	font-size: 14px;
	/* font-family: var(--font-mono); */
	/* line-height: 1; */
	text-decoration: none;
	cursor: pointer;
	transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
	&:hover,
	&:focus,
	&:active {
		background-color: rgba(255, 0, 0, 0.4);
		outline: none;
		color: #fff;
	}
	&:after {
		display: none !important;
	}
	padding: 8px 16px;
	margin: 10% auto 0;
	width: max-content;

	@media screen and (max-width: 768px) {
		font-size: 18px;
		/* width: 30%; */
	}
`;

export const NavItemBtn = styled.li`
	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120px;
	}
`;

export const NavBtnLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
`;
