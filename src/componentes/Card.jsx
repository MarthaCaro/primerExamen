import React from 'react'

const Card = (props) => {
  const{nombre, pelicula}= props;
  return (
    <div>{`señor(a) ${nombre} sabemos que la película que más le gusta es: ${pelicula}` }</div>
  )
}

export default Card
