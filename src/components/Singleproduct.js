import React, {useState, useEffect} from 'react'

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
    <div>
      <h1>{ceramic.header}</h1>
      <p>{ceramic.text}</p>
      <img src={ceramic.image} alt="" />

    </div>
  )
}