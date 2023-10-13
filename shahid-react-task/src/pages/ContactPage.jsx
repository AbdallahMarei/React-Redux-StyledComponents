import React from 'react';
import ContactForm from '../components/ContactForm';
import { Container } from '../components/styled/Container.styled';
import { StyledTitle } from '../components/styled/Title.styled';

const ContactPage = () => (
	<Container>
		<StyledTitle withMargin left>Contact Us</StyledTitle>
		<ContactForm />
	</Container>
);

export default ContactPage;
