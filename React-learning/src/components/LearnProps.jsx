// import React from 'react'

// export const LearnProps = (props) => {
//   return (

//     //Child
//     <>
//      <h1>All Props</h1>
//      <h1>{props.name}</h1>

//      <h1>{props.value}</h1>
//     </>
//   )
// }



// Doing Destructure
import React from 'react'

export const LearnProps = ({name, value}) => {
  return (

    //Child
    <>
     <h1>All Props</h1>
     <h1>{name}</h1>

     <h1>{value}</h1>
    </>
  )
}