import React from 'react'
import NotFoundImage from '../Images/juicy-man-delivers-a-parcel-on-a-scooter.gif'

function Notfound() {
  return (
    <div className='d-flex justify-content-center flex-column align-items-center'>
       <img src={NotFoundImage} width={350} alt="Not Found" />
        <h1 className='text-light'>What are you looking for🤷</h1>
    </div>
  )
}

export default Notfound