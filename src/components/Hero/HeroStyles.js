import styled from 'styled-components';

export const StyledHeroSection = styled.section`
	display: flex;
	/* align-items: center; */
	/* text-align: center; */
	flex-direction: column;
	align-items: flex-start;
	/* min-height: 100vh; */
	padding: 0;

	@media (max-width: 480px) and (min-height: 700px) {
		padding-bottom: 10vh;
	}
`;
export const LeftSection = styled.div`
	width: 100%;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
	h1 {
		margin: 0 0 30px 4px;
		font-size: clamp(14px, 5vw, 16px);
		font-weight: 400;
		@media (max-width: 480px) {
			margin: 0 0 20px 2px;
		}
	}
`;

export const HeroLink = styled.a`
	color: #ff0000;
	font-weight: 500;
	&:hover {
		color: rgb(255, 0, 0, 0.2);
	}
`;
export const HeroTitle = styled.h2`
	font-weight: 600;
	font-size: ${(props) => (props.main ? '32px' : '28px')};
	line-height: ${(props) => (props.main ? '36px' : '28px')};
	max-width: 100%;

	margin-bottom: 16px;
	padding: ${(props) => (props.main ? '58px 0 16px' : '0')};

	.greeting {
		font-size: 16px;
		color: #ff0000;
	}
	.big-heading {
		line-height: 1.1;
		margin: 0;
		font-size: clamp(40px, 8vw, 80px);
	}
`;

export const GetInTouch = styled.a`
	color: #ff0000;
	background-color: transparent;
	border: 2px solid #ff0000;
	border-radius: 4px;
	display: inline-block;
	position: relative;
	padding: 1.25rem 1.75rem;
	font-size: 14px;

	/* font-family: var(--font-mono); */
	line-height: 1;
	text-decoration: none;
	text-decoration-skip-ink: auto;
	cursor: pointer;
	transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
	&:hover,
	&:focus,
	&:active {
		outline: none;
		background-color: rgb(255, 0, 0, 0.2);
		/* opacity: 0.5; */
		/* transparent: 0.3; */
	}

	&:after {
		display: none !important;
	}
	margin-top: 50px;
`;
