import React, { useState } from 'react'

const Tour = ({name, id, description, image, price, onRemove}) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <div className='single-tour'>
      <h4>{name}</h4>
      <img src={image} alt="image"/>
      <p className='tour-info'>{readMore ? description : `${description.slice(0, 200)}...`} </p>
      <button onClick={() => setReadMore(prev => !prev)} style={{color: "blue", background: "none", border: "none", cursor: "pointer" }}>
        {readMore ? "See Less": "Show More"}
      </button><br/>
      <p className='tour-price'>{price}</p>
      <button className='delete-btn' onClick={() => onRemove(id)}>Remove</button>
    </div>
  )
}

export default Tour