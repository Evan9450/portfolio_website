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
