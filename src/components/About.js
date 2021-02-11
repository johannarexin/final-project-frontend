import React from 'react'

import '../styling/About.css'

export const About = () => {
  return (
    <div className="about-me-container">
      <h1 className="about-me-header">OM MIG</h1>
      <img src={require("../images/Johanna_2.jpg")} alt="" />
      <h2 className="about-me-sub-header">Hej, Johanna heter jag!</h2>
      <p className="about-me-text">Mitt intresse för keramik väcktes 
        när jag gick en kurs hos en keramiker som hade sin lilla studio tvärs över gatan från 
        där vi bodde förut. Det var kärlek vid första ögonkastet! För mig blev drejningen stunder 
        av total avkoppling där jag fick låta min kreativitet ta plats. 
        Min dröm är att bygga en liten drejverkstad i källaren här hemma.</p>
    </div>
  )
}