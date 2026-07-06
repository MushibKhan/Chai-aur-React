import React from 'react'

const handleClick = (e) =>{
  e.preventDefault()
  console.log("Button clicked ")
}

const handleClick2 = (myId) =>{

  console.log("Button clicked 2",myId)
}

export const LearnEvent = () => {
  return (
    <>
    {/*Event in JSX without Attribute */}
    <button onClick={handleClick}>Click Lean event</button>

    {/*Event in JSX with Attribute */}
    <button onClick={(e)=>handleClick2("myID")}>Click 2</button>
    </>
  )
}
