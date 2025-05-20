import React, { useState } from 'react'

const Tour = ({name, id, description, image, price, onRemove}) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <div>
      <h4>{name}</h4>
      <img src={image} alt="image"/>
      <p>{price}</p>
      <p>{readMore ? description : `${description.slice(0, 200)}...`} </p>
      <button onClick={() => setReadMore(prev => !prev)} style={{color: "blue", background: "none", border: "none", cursor: "pointer" }}>
        {readMore ? "See Less": "Show More"}
      </button><br/>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  )
}

export default Tour