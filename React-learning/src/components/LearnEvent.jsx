import React from 'react'

const handleClick = (e) =>{
  e.preventDefault()
  console.log("Button clicked ")
}

export const LearnEvent = () => {
  return (
    <>
    <button onClick={handleClick}>Click Lean event</button>
    </>
  )
}
