import React from 'react'

import { Link } from 'react-router-dom'

import '../styling/Nav.css'

export const Nav = () => {
  return (
    <nav>
      <a href="/">
        <h3>Hem</h3>
      </a>
      <ul className="nav-links">
          <Link to="/ceramics">
            <li>Keramik</li>
          </Link>
          <Link to="/about">
            <li>Om mig</li>
          </Link>
          </ul>
    </nav>
  )
}