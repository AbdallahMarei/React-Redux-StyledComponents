import styled from "styled-components";

export const Button = styled.button`
	background-color: #4caf50;
	border: none;
	border-radius: 5px;
	color: white;
	cursor: pointer;
	margin-top: 10px;
	padding: 10px;
	width: 150px;

	&:disabled {
		opacity: 0.5;
	}

	&:enabled {
		opacity: 1;

		&:hover {
			background-color: #369140;
		}
	}

	@media (max-width: 768px) {
		font-size: 12px;
		width: 100px;
	}
`;
