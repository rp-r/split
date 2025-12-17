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

  const [personinfo, setPersoninfor] = useState<Friend[]>(initialFriends);
  return (
    <div className='app'>
      <div className='sidebar'><FriendList /></div>

    </div>
  )
}

function FriendList() {

  const friends = initialFriends
  return (<div>
    <ul>
      {friends.map((friend) => <Friend friend={friend} />)}
    </ul>

  </div>
  )
}





function Friend({ friend }: any) {

  return (
    <li> <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (<p className='red'>You own {friend.name} ${Math.abs(friend.balance)}


      </p>)}

      {friend.balance > 0 && (<p className='green'>{friend.name}  owns you ${Math.abs(friend.balance)}


      </p>)}


      {friend.balance === 0 && (<p >You and  {friend.name} are even</p>)}






      <button className='button'>select</button></li>)

}




export default App
