import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>Home</h1>
    <Link to = "/About">About</Link>
    <br />
    <Link to = "/Contact">Contact</Link>
    <br />
    {/* <Link to = "/Product">Product</Link>
    <br /> */}
    <Link to="/Product/1">Product 1</Link>
    <br />
    <Link to="/Product/2">Product 2</Link>
    <br />
    <Link to="/Product/3">Product 3</Link>
    <br />
    
    </>
  )
}

export default Home