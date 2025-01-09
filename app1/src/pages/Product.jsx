import React from 'react'
import { useParams } from 'react-router-dom'

export const Product = () => {
    const {ProductId} = useParams();
  return (
    <>
        <h1>Product id is {ProductId} </h1>
    </>
  )
}
