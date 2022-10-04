import React from "react";
import { useParams } from "react-router-dom";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";

// Hook
import { useMovieFetch } from "../hooks/useMovieFetch";

// Image
import NoImage from "../images/no_image.jpg";

function Movie() {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  console.log(movie);

  if (loading) return <Spinner />;
  if (error) return <div>Un problème s'est produit...</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header='Actors'>
        {movie.actors.map(
          actor => {
            const {credit_id, name, character, profile_path} = actor;
            return (
              <Actor
                key={credit_id}
                name={name}
                character={character}
                imageUrl={
                  profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${profile_path}`
                  : NoImage
                }
              />
            );
          }
        )}
      </Grid>
    </>
  );
}

export default Movie;
