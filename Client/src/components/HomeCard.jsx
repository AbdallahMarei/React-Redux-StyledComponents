import React from "react";
import { StyledCard } from "./styled/Card.styled";
import { Link } from 'react-router-dom';
import { Button } from "./styled/Button.styled";
import styled from "styled-components";
import { StyledTitle } from "./styled/Title.styled";

const BlogLink = styled(Link)`
    text-decoration: none;
`

const HomeSpan = styled.span`
    text-align: center;
`

const HomeCard = () => (
	<StyledCard>
		<StyledTitle centered>Welcome to Shahid</StyledTitle>
		<HomeSpan>The go to place for your favorite movies and series</HomeSpan>
		<HomeSpan>Check out our blog for upcoming movies</HomeSpan>
		<BlogLink to="/blog">
			<Button>Blog</Button>
		</BlogLink>
	</StyledCard>
);

export default HomeCard;
