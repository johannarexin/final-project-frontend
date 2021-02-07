// import React from 'react'

// export const Singleproduct = () => {
//   return (
//     <div>
//       SINGLE PRODUCT
//     </div>
//   )
// }

import React, {useState, useEffect} from 'react'

export const Singleproduct = ({match}) => {
  console.log(match)
  useEffect(() => {
    fetchCeramic()
  }, [])

  const [ceramic, setCeramic] = useState({})

  const fetchCeramic = async () => {
    const fetchCeramic = await fetch (`https://final-project-backend-rexin.herokuapp.com/ceramics/${match.params.id}`)
    const item = await fetchCeramic.json()
    setCeramic(item)
    console.log(item)
  }

  return (
    <div>
      <h1>{ceramic.header}</h1>
      <p>{ceramic.text}</p>
      <img src={ceramic.image} alt="" />

    </div>
  )
}