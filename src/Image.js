import React from 'react'
import product from './Product'

const Image = () => {
  return (
<img src={product.image} alt={product.name}/>  )
}

export default Image