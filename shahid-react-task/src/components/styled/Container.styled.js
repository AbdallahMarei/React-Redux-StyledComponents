import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    max-width: 100%;
    padding: 0 20px;
    width: 1400px;
`;

const MovieContainer = styled.div`
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

const CenteredContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
`

export {
    MovieContainer,
    Container,
    CenteredContainer,
}
