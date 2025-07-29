import React from 'react'
import './TFNewsCard.css'

const TFNewsCard = ({pic, text}) => {
  return (
    <>
        <div className="tfn">
            <img src={pic} alt="Transer News Picture" width={200}/>
            <p>{text}</p>
        </div>
    </>
  )
}

export default TFNewsCard