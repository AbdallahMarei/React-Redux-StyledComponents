import { styled } from "styled-components";

export const StyledTitle = styled.h1`
    font-size: 30px;
    text-align: ${({ left }) => left ? "left" : "center"};

    ${({ withMargin }) => withMargin && `
        margin: 20px 0;
  `}

    ${({ withMarginTop }) => withMarginTop && `
        margin-top: 35px;
  `}

    @media (max-width: 768px) {
        font-size: 25px;
    }
`
