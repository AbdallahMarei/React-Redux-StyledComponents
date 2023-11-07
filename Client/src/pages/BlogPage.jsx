import React from 'react'
import MovieCard from '../components/MovieCard';
import { Container, MovieContainer } from '../components/styled/Container.styled';
import { StyledTitle } from '../components/styled/Title.styled';
import useFetch from '../hooks/useFetch';

const BlogPage = () => {
    const {data: movies, loading} = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=d8d436ca878e548c5f0a4b2514f1e60b');

    return (
        <Container>
            <StyledTitle withMarginTop>Check out our upcoming Movies</StyledTitle>
            {loading ? <StyledTitle withMarginTop>Loading Movies...</StyledTitle> : (
                <MovieContainer>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} {...movie} />
                    ))}
                </MovieContainer>
            )}
        </Container>
    )
}

export default BlogPage;
