import React from 'react';

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';

// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

// Images
import NoImage from '../images/no_image.jpg';

function Home() {

    alert('This is the homepage');

    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();

    if(error) return <div>Un problème s'est produit...</div>

    return (
        <>

            {!searchTerm && state.results[0] ? 
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
                : null         
            }

            <SearchBar setSearchTerm={setSearchTerm} />

            <Grid header={searchTerm ? 'Résultats de la recherche': 'Films populaires en ce moment'}>
                {
                    state.results.map(
                        movie => {
                            return (
                                <Thumb 
                                    key={movie.id}
                                    clickable
                                    image = {movie.poster_path? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
                                    movieId={movie.id}
                                />
                            )
                        }
                    )
                }
            </Grid>

            {loading && <Spinner />}

            {state.page < state.total_pages && !loading && (
                <Button text='Voir plus' callback={ () => setIsLoadingMore(true) } />
            )}
            
        </>
    );
   
}

export default Home;
