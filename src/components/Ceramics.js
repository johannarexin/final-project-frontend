import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import '../styling/Ceramics.css'

export const Ceramics = () => {

  useEffect(() => {
    fetchCeramics()
  }, [])

  const [ceramics, setCeramics] = useState([])

  const fetchCeramics = async () => {
    const data = await fetch('https://final-project-backend-rexin.herokuapp.com/ceramics')
    
    const ceramics = await data.json()
    setCeramics(ceramics)
  }

  return (
    <>
    <h1 className="ceramics-header">KERAMIK</h1>
    <div className="ceramics-container">
      {ceramics.map(item => (
        <h2 className="ceramics-image" key={item._id}>
          <img className="ceramics-image" src={item.image} alt="" />
          <Link className="ceramics-link" to={`/ceramics/${item._id}`}>{item.header}</Link>
        </h2>
      ))}
    </div>
    </>
  )
}