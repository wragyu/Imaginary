import React from 'react'

import { download } from '../assets'
import { downloadImage } from '../utils'

const Card = ( {_id, name, prompt, photo }) => {
  return (
    <div className='rounded-xl group, relative shadow-card hover:shadow-cardhover card'>
      <img
      className='w-full h-auto object-cover rounded-xl'
      src={photo}
      alt={}
      />
    </div>
  )
}

export default Card

