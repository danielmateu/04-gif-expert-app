import React from 'react'
import './GifGridItem.css'

export const GifGridItem = ({id,title,img}) => {

    // console.log({id,title,img});

  return (
    <div className='card animate__animated animate__fadeInDown'>
        <img src={img} alt={title}/>
        <p>{title}</p>
    </div>
  )
}
