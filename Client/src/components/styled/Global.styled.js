import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
  }
  body {
	background: ${({ theme }) => theme.colors.bodyColor};
	color: ${({ theme }) => theme.colors.fontColor};
	font-family: 'Gabarito', sans-serif;
  }

  span, li {
	font-size: 18px;

	@media (max-width: 768px) {
		font-size: 14px;
	}
  }
`;

export default GlobalStyles;
