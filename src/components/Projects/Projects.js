import { BlogCard, CardInfo, GridContainer, HeaderThree, Img, Tag, TagList, TitleContent } from './ProjectsStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Section, SectionTitle } from '../../styles/GlobalComponents';

import React from 'react';
import { projects } from '../../constants/constants';

const Projects = () => (
	<Section id="projects">
		<SectionTitle main className="numbered-heading">
			Projects
		</SectionTitle>
		<GridContainer>
			<CSSTransition timeout={{ enter: 500, exit: 300 }}>
				<TransitionGroup component={null}>
					{projects.map(({ id, image, title, description, tags, source, visit }, index) => (
						<a href={source} target="_blank" key={title}>
							<CSSTransition timeout={500}>
								<BlogCard key={id} className="project-inner" style={{ transitionDelay: '100ms' }}>
									<Img src={image} />
									<TitleContent>
										<HeaderThree>{title}</HeaderThree>
										<br />
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
			</CSSTransition>
		</GridContainer>
	</Section>
);

export default Projects;
