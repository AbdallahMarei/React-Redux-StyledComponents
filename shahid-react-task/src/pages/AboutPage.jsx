import React from "react";
import AboutCard from "../components/AboutCard";
import { StyledCard } from "../components/styled/Card.styled";
import { Container } from "../components/styled/Container.styled";
import { StyledTitle } from "../components/styled/Title.styled";

const AboutPage = () => (
	<Container>
		<StyledCard>
			<StyledTitle>About this Application</StyledTitle>
			<AboutCard />
		</StyledCard>
	</Container>
);

export default AboutPage;
