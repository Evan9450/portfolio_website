import styled from 'styled-components';

export const SideElement = styled.div`
	width: 40px;
	position: fixed;
	bottom: 0;
	left: ${(props) => (props.orientation === 'left' ? '40px' : 'auto')};
	right: ${(props) => (props.orientation === 'left' ? 'auto' : '40px')};
	z-index: 10;
	color: #a8b2d1;

	@media (max-width: 1080px) {
		left: ${(props) => (props.orientation === 'left' ? '20px' : 'auto')};
		right: ${(props) => (props.orientation === 'left' ? 'auto' : '20px')};
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

export const SocialList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0;
	padding: 0;
	list-style: none;

	&:after {
		content: '';
		display: block;
		width: 1px;
		height: 90px;
		margin: 0 auto;
		background-color: #a8b2d1;
	}

	li {
		&:last-of-type {
			margin-bottom: 20px;
		}

		a {
			padding: 10px;

			&:hover,
			&:focus {
				transform: translateY(-3px);
			}

			svg {
				width: 20px;
				height: 20px;
			}
		}
	}
`;

export const LinkWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	&:after {
		content: '';
		display: block;
		width: 1px;
		height: 90px;
		margin: 0 auto;
		background-color: #a8b2d1;
	}

	a {
		margin: 20px auto;
		padding: 10px;
		font-size: 12px;
		line-height: 18px;
		letter-spacing: 0.1em;
		writing-mode: vertical-rl;

		&:hover,
		&:focus {
			transform: translateY(-3px);
		}
	}
`;
