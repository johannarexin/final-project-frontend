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
    console.log(ceramics)
    setCeramics(ceramics)
  }

  return (
    <div className="ceramics-container">
      <h1 className="ceramics-header">KERAMIK</h1>
      {ceramics.map(item => (
        <h2 key={item._id}>
          <img src={item.image} alt="" />
          <Link className="ceramics-container" to={`/ceramics/${item._id}`}>{item.header}</Link>
        </h2>
      ))}
    </div>
  )
}