import React from 'react'
import {IndividualImage} from './IndividualImage'

export const Images = ({ images }) => {
  return images.map((image) => (
    <IndividualImage key={image.id} image={image} />
  ))
}
