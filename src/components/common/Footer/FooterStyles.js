import styled from 'styled-components';

export const FooterWrapper = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: auto;
	min-height: 70px;
	padding: 4rem 0 2rem 0;
	text-align: center;
	background: #181818;
`;

export const FooterLink = styled.div`
	display: none;
	@media (max-width: 1080px) {
		display: none;
	}
	@media (max-width: 768px) {
		display: block;
		width: 100%;
		margin: 0 auto 10px;
		/* color: #9c0000; */
		/* color: #ff0000 !important; */
		max-width: 270px;
		ul {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0;
			margin: 0;
			list-style: none;
			a {
				color: #ff0000;
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
	}
`;

export const StyledCredit = styled.div`
	color: #a8b2d1;
	font-size: 12px;
	line-height: 1;
`;
