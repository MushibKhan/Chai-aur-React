import React from 'react'

export const LearnJSX = () => {
    let model = "G11234"
  return (
    <>
    {/*React.createElement("h1,"null","LearnJSX1") */}
    <h1>Learn JSX 1</h1>
    {/*React.createElement("h1,"null","LearnJSX2") */}
    <h1>Learn JSX 2</h1>

    {/*Js Expression in JSX */}
    <h1> Price: {10+20}</h1>
    <h1>LG {model}</h1>

     {/*Attribute in JSX */}
     <h1 className='bg-primary'>LeranJSX</h1>

      <h1 className={model}>LeranJSXDynamic</h1>
    </>
  )
}
