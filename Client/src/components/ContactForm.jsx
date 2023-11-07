import React from "react";
import { useState } from "react";
import { Button } from "./styled/Button.styled";
import {
	StyledAlert,
	StyledForm,
	StyledInput,
	StyledLabel,
	StyledFormGroup,
	StyledSuccessMessage,
	StyledTextArea,
} from "./styled/Form.styled";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({});
	const [successMessage, setSuccessMessage] = useState(false);

	const { username, email, message } = formData;

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const checkForErrors = () => {
		let submitErrors = {};

		const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

		if (username.length < 4) {
			submitErrors.userNameMsg = "Username must be longer than 3 characters";
		}
		if (!regEmail.test(email)) {
			submitErrors.emailMsg = "Must be a valid email";
		}

		setErrors({ ...submitErrors });
		return Object.keys(submitErrors).length;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!!checkForErrors()) {
			setSuccessMessage(false);
			return;
		}

		setSuccessMessage(true);
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<StyledFormGroup>
				<StyledLabel invalid={errors?.userNameMsg}>Username:</StyledLabel>
				<StyledInput
					type="text"
					name="username"
					value={username}
					onChange={handleInputChange}
				/>
				{errors?.userNameMsg && <StyledAlert>{errors.userNameMsg}</StyledAlert>}
			</StyledFormGroup>
			<StyledFormGroup>
				<StyledLabel invalid={errors?.emailMsg}>Email:</StyledLabel>
				<StyledInput
					type="email"
					name="email"
					value={email}
					onChange={handleInputChange}
				/>
				{errors?.emailMsg && <StyledAlert>{errors.emailMsg}</StyledAlert>}
			</StyledFormGroup>
			<StyledFormGroup>
				<StyledLabel>Message:</StyledLabel>
				<StyledTextArea
					rows="4"
					placeholder="Your message"
					value={message}
					name="message"
					onChange={handleInputChange}
				/>
			</StyledFormGroup>
			{successMessage && (
				<StyledSuccessMessage>
					Thank you for you message, We will contact you soon
				</StyledSuccessMessage>
			)}
			<Button type="submit" disabled={!username || !email || !message}>
				Send
			</Button>
		</StyledForm>
	);
};

export default ContactForm;
