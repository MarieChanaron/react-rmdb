import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import {Wrapper, Content} from './BreadCrumb.styles';
 
function BreadCrumb({movieTitle}) {
  return (
    <Wrapper id="breadcrumb-wrapper">
        <Content>
            <Link to='/react-rmdb' className='link' style={{textDecoration: 'none'}}>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
  )
}

BreadCrumb.propTypes = {
  movieTitle: PropTypes.string
}

export default BreadCrumb;
