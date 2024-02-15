import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
    <div className='header__content'>
      <h1>Structure</h1>
    </div>
    <ul className='nav__items'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#faqs">FAQs</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  )
}

export default Navbar