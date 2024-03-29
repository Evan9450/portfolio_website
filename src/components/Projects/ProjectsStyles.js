import styled from 'styled-components';

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
`;

export const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 2fr));
	/* padding: 3rem; */
	place-items: center;
	grid-gap: 15px;
	row-gap: 3rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		/* padding: 2rem; */
		padding-bottom: 0;
	}
	@media (max-width: 1080px) {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
`;
export const BlogCard = styled.div`
	border-radius: 10px;
	background-color: #3f0000;
	/* box-shadow: 3px 3px 20px rgba(80, 80, 80, 0.5); */
	text-align: center;
	padding: 20px;
	width: auto;
	max-width: 350px;
	min-height: 500px;

	&:before {
		content: '';
		display: block;
		position: absolute;
		z-index: 0;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
	&:hover,
	&:focus-within {
		transform: translateY(-7px);
	}
`;
export const TitleContent = styled.div`
	text-align: center;
	color: #ff0000;
	z-index: 20;
	width: 100%;
	font-weight: 400;
	margin-top: 10px;
	font-size: 14px;

	.tag {
		font-weight: 800;
	}
`;

export const HeaderThree = styled.h3`
	font-weight: 500;
	letter-spacing: 2px;
	color: #ffffff;
	padding: 0.5rem 0;
	font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`;

export const Hr = styled.hr`
	width: 50px;
	height: 3px;
	margin: 20px auto;
	border: 0;
	background: #f84424;
`;

export const Intro = styled.div`
	width: 170px;
	margin: 0 auto;
	color: #dce3e7;
	font-family: 'Droid Serif', serif;
	font-size: 13px;
	font-style: italic;
	line-height: 18px;
`;

export const CardInfo = styled.p`
	width: 100%;
	padding: 0 20px;
	color: #e4e6e7;
	font-style: 2rem;
	line-height: 24px;
	text-align: justify;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.3rem;
	}
`;

export const UtilityList = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: space-around;
	margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
	color: #d4c0c0;
	font-size: 1.6rem;
	padding: 1rem 1.5rem;
	background: #6b3030;
	border-radius: 15px;
	transition: 0.5s;
	&:hover {
		background: #801414;
	}
`;

export const TagList = styled.ul`
	display: flex;
	/* justify-content: space-between; */
	align-items: flex-end;
	flex-grow: 1;
	flex-wrap: wrap;
	padding: 0;
	/* margin: 20px 0 0 0; */
	list-style: none;
	padding: 15px 20px;
`;
export const Tag = styled.li`
	color: #d8bfbf;
	font-size: 1.5rem;
	margin-right: 12px;
`;
