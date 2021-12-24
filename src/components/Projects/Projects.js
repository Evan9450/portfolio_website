import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Img,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

import Link from 'next/link';
import React from 'react';
import { projects } from '../../constants/constants';

const Projects = () => (
	<Section nopadding id="projects">
		<SectionDivider />
		<SectionTitle main>Projects</SectionTitle>
		<GridContainer>
			{projects.map(({ id, image, title, description, tags, source, visit }, index) => (
				<a href="https://google.com">
					<BlogCard key={id}>
						<Img src={image} />
						<TitleContent>
							<HeaderThree>{title}</HeaderThree>
							<Hr />
							<CardInfo>{description}</CardInfo>
							<div>
								<TitleContent>Stack</TitleContent>
								<TagList>
									{tags.map((tag, i) => (
										<Tag key={i}>{tag}</Tag>
									))}
								</TagList>
							</div>
							{/* <UtilityList>
							<ExternalLinks href={visit}>Code</ExternalLinks>
							<ExternalLinks href={source}>Source</ExternalLinks>
						</UtilityList> */}
						</TitleContent>
					</BlogCard>
				</a>
			))}
		</GridContainer>
	</Section>
);

export default Projects;
