import { useState } from 'react'

type person = {

  name: string;
  message: string
}



const data: person[] = [


  {
    name: "Clark",
    message: "You own Clark 7 Euro"
  },

  {
    name: "Sarah",
    message: "Sarah owns your  9 Euro"
  },

  {
    name: "Anthony",
    message: "You and Anthony are even"
  }


]

function App() {

  return (
    <>
      <p>In the name of Allah</p>

      <Main />

    </>
  )
}


function Main() {
  return (<><p><Left />
    <Right /> </p></>)
}

function Left() {
  return (<><p>Left plateform </p></>)
}

function Right() {
  return (<><p>Right plateform </p></>)
}
export default App
