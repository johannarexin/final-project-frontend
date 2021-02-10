import React from 'react'

import { Link } from 'react-router-dom'

import '../styling/Nav.css'

export const Nav = () => {
  return (
    <nav>
      <a href="/">
        <h3>HEM</h3>
      </a>
      <ul className="nav-links">
          <Link to="/ceramics">
            <li>KERAMIK</li>
          </Link>
          <Link to="/about">
            <li>OM MIG</li>
          </Link>
          </ul>
    </nav>
  )
}