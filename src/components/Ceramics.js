import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

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
    <div>
      <h1>KERAMIK</h1>
      {ceramics.map(item => (
        <h3 key={item._id}>
          <Link className="ceramics-container" to={`/ceramics/${item._id}`}>{item.header}</Link>
          <img src={item.image} alt="" />
        </h3>
      ))}
    </div>
  )
}