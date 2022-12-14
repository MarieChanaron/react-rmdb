import React from 'react';
import PropTypes from 'prop-types';

// Helpers
import {calcTime, convertMoney} from '../../helpers';

// Styles
import { Wrapper, Content} from './MovieInfoBar.styles';

function MovieInfoBar({time, budget, revenue}) {
  return (
    <Wrapper>
        <Content>
            <div className='column'>
                <p>Durée: {calcTime(time)}</p>
            </div>
            <div className='column'>
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className='column'>
                <p>Revenu: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
  )
}

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default MovieInfoBar;
