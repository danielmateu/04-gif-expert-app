import React from 'react'
import './GifGridItem.css'
import PropTypes from 'prop-types';

export const GifGridItem = ({title,img}) => {

    // console.log({id,title,img});

    


  return (
    <div className='card animate__animated animate__fadeInDown'>
        <img src={img} alt={title}/>
        <p>{title}</p>
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
