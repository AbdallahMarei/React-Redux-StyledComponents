import React from 'react'
import { Link } from 'react-router-dom';
import { CenteredContainer } from '../components/styled/Container.styled';
import { StyledTitle } from '../components/styled/Title.styled';

const NotFoundPage = () => (
    <CenteredContainer>
        <StyledTitle withMargin>Oops! You seem to be lost.</StyledTitle>
        <p>Here are some helpful links:</p>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
    </CenteredContainer>
);

export default NotFoundPage;
