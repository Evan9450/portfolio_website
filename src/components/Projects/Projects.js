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
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

import Link from 'next/link';
import React from 'react';
import { projects } from '../../constants/constants';

const Projects = () => (
	<Section id="projects">
		<SectionDivider />
		<SectionTitle main className="numbered-heading">
			<span className="title-number">01.</span>
			Projects
		</SectionTitle>
		<GridContainer>
			<TransitionGroup component={null}>
				{projects.map(({ id, image, title, description, tags, source, visit }, index) => (
					<a href={source} target="_blank">
						<CSSTransition timeout={500} exit={false}>
							<BlogCard key={id} className="project-inner">
								<Img src={image} />
								<TitleContent>
									<HeaderThree>{title}</HeaderThree>
									<Hr />
									<CardInfo>{description}</CardInfo>
									<div>
										<TitleContent className="tag">Stack</TitleContent>
										<TagList>
											{tags.map((tag, i) => (
												<Tag key={i}>{tag}</Tag>
											))}
										</TagList>
									</div>
								</TitleContent>
							</BlogCard>
						</CSSTransition>
					</a>
				))}
			</TransitionGroup>
		</GridContainer>
	</Section>
);

export default Projects;
