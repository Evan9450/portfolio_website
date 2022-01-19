import styled from 'styled-components';

export const Section = styled.section`
	display: ${(props) => (props.grid ? 'grid' : 'flex')};
	flex-direction: ${(props) => (props.row ? 'row' : 'column')};
	padding: ${(props) => (props.nopadding ? '0' : '16px 24px 0')};
	margin: 0 auto;
	/* min-height: 100vh; */

	max-width: 1040px;
	box-sizing: content-box;
	position: relative;
	overflow: hidden;
	grid-template-columns: 1fr 1fr;

	/* @media ${(props) => props.theme.breakpoints.md} {
		padding: 24px 48px 0;
		flex-direction: column;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: ${(props) => (props.nopadding ? '0' : '16px 16px 0')};

		width: 100vw;
		flex-direction: column;
	} */
	.hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
`;

export const SectionTitle = styled.div`
	font-weight: 600;
	font-size: ${(props) => (props.main ? '32px' : '28px')};
	line-height: ${(props) => (props.main ? '36px' : '28px')};
	max-width: 100%;

	margin-bottom: 16px;
	padding: ${(props) => (props.main ? '58px 0 16px' : '0')};

	.title-number {
		font-size: 22px;
		color: #ff0000;
		margin-right: 10px;
	}
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

export const SectionText = styled.p`
	max-width: 800px;
	font-size: 18px;
	line-height: 40px;
	font-weight: 300;
	padding-bottom: 3.6rem;
	color: rgba(255, 255, 255, 0.5);

	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 670px;
		font-size: 20px;
		line-height: 32px;
		padding-bottom: 24px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 16px;
		line-height: 24px;
		padding-bottom: 16px;
	}
`;

export const SectionDivider = styled.div`
	width: 64px;
	height: 6px;
	border-radius: 10px;
	background-color: #fff;
	background: #ff0000;

	margin: ${(props) => (props.divider ? '4rem 0' : '')};

	@media ${(props) => props.theme.breakpoints.md} {
		width: 48px;
		height: 4px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 32px;
		height: 2px;
	}
`;
export const SectionSubText = styled.p`
	max-width: 800px;
	font-weight: 300;
	font-size: 18px;
	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);

	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 672px;
		font-size: 16px;
		line-height: 25px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
		line-height: 22px;
	}
`;
export const SecondaryBtn = styled.button`
	color: #fff;
	background: none;
	border: 1px solid rgba(255, 255, 255, 0.33);
	box-sizing: border-box;
	border-radius: 999px;
	padding: 16px 24px;
	font-weight: 600;
	font-size: 18px;
	line-height: 16px;
	width: fit-content;
	margin-top: 32px;
	margin-bottom: 80px;
	cursor: pointer;
	transition: 0.4s ease;
	&:focus {
		outline: none;
	}

	&:hover {
		color: #0f1624;
		background: #fff;
		border: 1px solid #fff;
	}

	&:active {
		background: #e0e4eb;
		border: 1px solid #304169;
		box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
	}

	@media ${(props) => props.theme.breakpoints.md} {
		margin-top: 24px;
		margin-bottom: 64px;
		padding: 16px 24px;
		width: fit-content;
		font-size: 20px;
		line-height: 20px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin-top: 16px;
		margin-bottom: 40px;
		padding: 8px 16px;
		width: 100%;
		font-size: 14px;
		line-height: 16px;
	}
`;

export const ButtonBack = styled.div`
	width: ${({ alt }) => (alt ? '150px' : '262px')};
	height: ${({ alt }) => (alt ? '52px' : '64px')};
	border-radius: 50px;
	font-size: ${({ alt }) => (alt ? '20px' : '24px')};
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: ${({ alt, form }) => (alt || form ? '0' : '0 0 80px')};
	color: #fff;
	background: ${({ alt }) =>
		alt
			? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)'
			: 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
	cursor: pointer;
	transition: 0.5s ease;
	position: relative;
	overflow: hidden;
	opacity: ${({ disabled }) => (disabled ? '.5' : '1')};

	@media ${(props) => props.theme.breakpoints.md} {
		width: ${({ alt }) => (alt ? '150px' : '184px')};
		height: ${({ alt }) => (alt ? '52px' : '48px')};
		font-size: ${({ alt }) => (alt ? '20px' : '16px')};
		margin-bottom: ${({ alt }) => (alt ? '0' : '64px')};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		height: 32px;
		font-size: 14px;
		margin-bottom: ${({ alt }) => (alt ? '0' : '32px')};
	}
`;

export const ButtonFront = styled.button`
	border: none;
	border-radius: 50px;
	color: #fff;
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: ${({ alt }) =>
		alt
			? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)'
			: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
	opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
	transition: 0.4s ease;
	font-size: ${({ alt }) => (alt ? '20px' : '24px')};
	font-weight: 600;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	box-shadow: ${({ disabled }) =>
		disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

	&:hover {
		opacity: 0;
	}
	&:focus {
		outline: none;
	}
	&:active {
		opacity: 1;
		box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
	}

	&:disabled {
		background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
		opacity: 0.5;
		box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
	}

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: ${({ alt }) => (alt ? '20px' : '16px')};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
	}
`;

export const LinkContainer = styled.div`
	margin-left: ${({ large }) => (large ? '24px' : '16px')};
	transition: 0.3s ease;
	justify-content: center;
	border-radius: 50px;
	padding: 8px;

	&:hover {
		background-color: #212d45;
		transform: scale(1.2);
		cursor: pointer;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		margin-left: ${({ large }) => (large ? '16px' : '8px')};
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-left: ${({ large }) => (large ? '0' : '8px')};
	}
`;

export const LinkIconImg = styled.div`
	display: flex;
	height: ${({ large }) => (large ? '32px' : '24px')};

	@media ${(props) => props.theme.breakpoints.md} {
		height: ${({ nav }) => (nav ? '16px' : '24px')};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		height: ${({ large }) => (large ? '32px' : '16px')};
	}
`;
export const Container = styled.div`
	z-index: 12;
	width: 100%;
	/* max-width: 1400px; */
	margin-right: 0;
	margin-left: 0;
	padding-right: 50px;
	padding-left: 50px;

	@media screen and (max-width: 768px) {
		padding-left: 30px;
		padding-right: 30px;
	}
`;
