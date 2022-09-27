import React, {useState, useEffect} from 'react';

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';

// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

// Images
import NoImage from '../images/no_image.jpg';

function Home() {

    const { state, loading, error } = useHomeFetch();

    console.log(state);

    return (
        <>
            {state.results[0] ? 
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
                : null         
            }
            <Grid header='Popular Movies'>
                {
                    state.results.map(
                        movie => {
                            return (
                                <Thumb 
                                    key={movie.id}
                                    clickable
                                    image='https://thumbs.dreamstime.com/z/sun-2972259.jpg'
                                    movieId={movie.id}
                                />
                            )
                        }
                    )
                }
            </Grid>
        </>
    );
   
}

export default Home;
