import React from "react";
import { StyledCard } from "./styled/Card.styled";

const MovieCard = ({ title, poster_path, vote_average, release_date }) => (
	<StyledCard movieCard>
		<img
			src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
			alt="movie-poster"
		/>
		<div>
			<span>{title}</span>
			<span>Rating: {vote_average}</span>
			<span>Release Date: {release_date}</span>
		</div>
	</StyledCard>
);

export default MovieCard;
