import React from 'react';
import PropTypes from 'prop-types';

// Components
import Thumb from '../Thumb';

// Config
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../config';

// Image
import NoImage from '../../images/no_image.jpg';

// Styles
import { Wrapper, Content, Text} from './MovieInfo.styles';

function MovieInfo({movie}) {
  return (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb 
                image={movie.poster_path 
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : NoImage
                }
                clickable={false}
                alt='movie-thumb'
            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>INTRIGUE</h3>
                <p>{movie.overview}</p>
                <div className='rating-directors'>
                    <div>
                        <h3>NOTATION</h3>
                        <p className='score'>{movie.vote_average}</p>
                    </div>
                    <div className='director'>
                        <h3>DIRECTEUR{movie.directors.length > 1 ? 'S' : ''}</h3>
                        {movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                        ))}
                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
  )
}

MovieInfo.propTypes = {
    movie: PropTypes.object
}

export default MovieInfo;
