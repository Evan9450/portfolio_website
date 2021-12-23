import { Container } from '../../styles/GlobalComponents/index';
import { IoIosArrowDropdown } from 'react-icons/io';
import Link from 'next/link';
import styled from 'styled-components';

// export const Container = styled.div`
// 	display: grid;
// 	grid-template-columns: repeat(5, 1fr);
// 	grid-template-rows: 1fr;
// 	grid-column-gap: 2rem;
// 	padding: 1rem;
// 	padding-top: 2rem;
// 	@media ${(props) => props.theme.breakpoints.sm} {
// 		display: grid;
// 		grid-template-columns: repeat(5, 1fr);
// 		grid-template-rows: repeat(2, 60px);
// 		grid-column-gap: 0.5rem;
// 		grid-row-gap: 0.5rem;
// 	}
// `;
export const StyledHeader = styled.header`
	/* background: ${({ scrollNav }) => (scrollNav ? '#000000' : 'transparent')}; */
	background: #000000;
	height: 80px;
	/* margin-top: -80px; */
	/* display: flex; */
	/* justify-content: center; */
	font-size: 1.2rem;
	/* align-items: center; */
	position: fixed;
	top: 0;
	z-index: 11;
	transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
	width: 100%;
	backdrop-filter: blur(10px);
	filter: none !important;
	${(props) =>
		props.scrollDirection === 'up' &&
		!props.scrollToTop &&
		css`
			height: 80px;
			transform: translateY(0px);
			background-color: rgba(0, 0, 0, 0.7);
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

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 80px;
	padding: 0 0;

	${Container}
`;
export const Div1 = styled.div`
	grid-area: 1 / 1 / 2 / 2;
	display: flex;
	flex-direction: row;
	align-content: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 1 / 1 / 2 / 3;
	}
`;
export const Div2 = styled.div`
	grid-area: 1 / 2 / 2 / 4;
	display: flex;
	justify-content: space-around;
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 2 / 2 / 3 / 5;
	}
`;
export const Div3 = styled.div`
	grid-area: 1 / 5 / 2 / 6;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		align-items: center;
		grid-area: 1 / 4 / 2 / 6;
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

/// DropDown Contact
export const ContactDropDown = styled.button`
	border: none;
	display: flex;
	position: relative;
	background: none;
	font-size: 1.7rem;
	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);
	cursor: pointer;
	transition: 0.3s ease;
	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.4rem 0;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 0;
	}
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
	margin-left: 8px;
	display: flex;
	align-self: center;
	transition: 0.3s ease;
	opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
	transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};
	&:hover {
		opacity: 1;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 2px 0 0 2px;
		width: 15px;
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
		/* flex-direction: column;
        width: 70%;
        height: 90vh;
        outline: 0;
        position: fixed;
        top: 80px;
        right: ${({ click }) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        background: #000000;
        box-shadow: -10px 0px 30px -15px rgba(0, 0, 0, 0.7);
        visibility: ${(props) => (props.menuOpen ? 'visible' : 'hidden')}; */
		/* display: none; */
	}
`;
export const NavItem = styled.li`
	/* display: inline-block; */
	margin: 0 5px;
	position: relative;
	counter-increment: item 1;
	font-size: 13px;

	&:hover {
		/* border-bottom: 2px solid #4b59f7; */
	}

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
