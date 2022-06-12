import React from 'react'

const PrimaryButton = ({text}) => {
  return (
    <button className='btn btn-primary letter-spacing uppercase'><span>{text}</span></button>
  )
}

export default PrimaryButton