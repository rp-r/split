import { useState } from 'react'
import "./index.css"

type person = {

  name: string;
  message: string;
}

type Friend = {
  id: number;
  name: string;
  image: string;
  balance: number;
};
const initialFriends: Friend[] = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


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

  const [personinfo, setPersoninfor] = useState<person[]>(data);
  return (
    <>


      <Main getinfo={personinfo} />

    </>
  )
}


function Main({ getinfo }: any) {
  return (<><p>

    <Left takeinfo={getinfo} />
    <Right /> </p></>)
}

function Left({ takeinfo }: any) {

  const [col, setCol] = useState({ "backgroundcolor": "blue" })
  function changeBackgroundColor() {
    setCol({ "backgroundcolor": "green" })

  }

  return (<>
    <ul>

      <li style={{ "backgroundColor": "lightyellow", "display": "inline-block", "border": "red" }} onClick={changeBackgroundColor}>{takeinfo.map((el: any) => <PersonInfo elobject={el}

      />)}</li>
    </ul>


  </>
  )
}

function Right() {
  return (<div style={{ "backgroundColor": "lightyellow", "display": "inline-block" }}><p>Right plateform </p></div>)
}

function PersonInfo({ elobject }: any) {

  return (<>
    <div className='listitem'>
      <span>{elobject.name}</span></div>
    <span style={{ "fontSize": "10px" }}>{elobject.message}</span>
    <button className='list_btn'>Add</button></>)

}




export default App
