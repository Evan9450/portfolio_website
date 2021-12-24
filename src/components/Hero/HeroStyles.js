import styled from 'styled-components';

export const StyledHeroSection = styled.section`
	display: flex;
	/* align-items: center; */
	/* text-align: center; */
	flex-direction: column;
	align-items: flex-start;
	min-height: 100vh;
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
`;

export const GetInTouch = styled.a`
	color: #ff0000;
	background-color: transparent;
	border: 1px solid #ff0000;
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
