import React, {useState, useEffect} from 'react'

export const Ceramics = () => {

  useEffect(() => {
    fetchCeramics()
  }, [])

  const fetchCeramics = async () => {
    const data = await fetch('https://final-project-backend-rexin.herokuapp.com/ceramics')
    
    const ceramics = await data.json()
    console.log(ceramics)
  }

  return (
    <div>
      <h1>KERAMIK</h1>
    </div>
  )
}