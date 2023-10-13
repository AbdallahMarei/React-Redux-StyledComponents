import styled from "styled-components";

export const StyledCard = styled.div`
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.cardColor};
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	flex-direction: column;
	gap: 30px;
	justify-content: center;
	margin: 40px 0;
	padding: 60px;

  ${({ movieCard }) => movieCard && `
		height: 600px;
		justify-content: unset;
		padding: 0;
		width: 300px;

		img {
			border-radius: 5px;
			height: 450px;
			transition: 0.5s;

			&:hover {
				transform: scale(1.05);
			}
		}

		div {
			display: flex;
			flex-direction: column;
			gap: 10px;
			padding-left: 20px;
			width: 100%;
		}

		@media (max-width: 1024px) {
			width: 90%;

			img {
				width: 100%;
			}
		}
  `}
`;
