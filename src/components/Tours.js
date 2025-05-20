import React from 'react'
import Tour from './Tour'

const Tours = ({tourList, onRemove}) => {
  
  return (
    <div>
      {tourList.map((tour) => {
        return (
            <Tour 
              key={tour.id}
              id={tour.id}
              name={tour.name}
              description={tour.info}
              image={tour.image}
              price={tour.price}
              onRemove={onRemove}
            />
        )
      })}
    </div>
  )
}

export default Tours