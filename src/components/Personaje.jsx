import React from 'react'

const Personaje = ({personaje}) => {

    const {name, species, image} = personaje
  return (
    <div className='col-md-4 mb-2'>
        <div className="card">
            <img src={image} alt={`imagen-${name}`} className='card-img-top' />
            <div className="card-body">
                <h5>{name}</h5>
                <p>{species}</p>
            </div>
        </div>
        <h2>Personaje</h2>
    </div>
  )
}

export default Personaje