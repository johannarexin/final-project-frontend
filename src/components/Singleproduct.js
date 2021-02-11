import React, {useState, useEffect} from 'react'

import '../styling/Singleproduct.css'

export const Singleproduct = ({match}) => {
  const fetchCeramic = async () => {
    const fetchCeramic = await fetch (`https://final-project-backend-rexin.herokuapp.com/ceramics/${match.params.id}`)
    const item = await fetchCeramic.json()
    setCeramic(item)
  }
  
  useEffect(() => {
    fetchCeramic()
  }, [])

  const [ceramic, setCeramic] = useState({})

  return (
    <div className="single-product-container">
      <div className="single-product-text-container">
        <h1 className="single-product-header">{ceramic.header}</h1>
        <p className="single-product-text">{ceramic.text}</p>
      </div>
      <div>
        <img className="single-product-image" src={ceramic.image} alt="" />
      </div>
    </div>
  )
}