import { styled } from "styled-components";

const inputStyling = [`
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
`]

const StyledForm = styled.form`
	background-color: ${({ theme }) => theme.colors.cardColor};
	border-radius: 5px;
	padding: 20px;
`;

const StyledFormGroup = styled.div`
  	margin-bottom: 10px;
`;

const StyledLabel = styled.label`
	display: block;
	margin-bottom: 5px;
	color: ${({ invalid }) => invalid ? "red" : ({ theme }) => theme.colors.fontColor};
`;

const StyledInput = styled.input(inputStyling)

const StyledTextArea = styled.textarea(inputStyling)

const StyledAlert = styled.div`
	padding: 10px;
  	background-color: #f44336;
  	color: white;
  	margin-top: 10px;
  	border-radius: 5px;
`;

const StyledSuccessMessage = styled.p`
  	color: green;
`;

export {
	StyledForm,
	StyledLabel,
	StyledInput,
	StyledTextArea,
	StyledAlert,
	StyledFormGroup,
	StyledSuccessMessage,
};
