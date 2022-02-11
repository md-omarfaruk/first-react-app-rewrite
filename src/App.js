import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
const friends = ["Md. Mazharul", "Md. Dipu", "Md. Joshim"]
const friendsObject = [
  {name: "Md. Hassan"}
]

const elakaFriends = [ "Md. Himu", "Md. Fahim", "Md. Sujon"];

const theirDetail = [
  {name: "Md. Himu", age: 23},
  {name: "Md. Fahim", age: 23},
  {name: "Md. Sujon", age: 25}

]


// const [apiList, setApiList] = useState([]);

//         useEffect(() =>{
//           fetch("https://randomuser.me/api/?results=10")
//           .then(res => res.json())
//           .then(data => {
//             setApiList(data);
//             // console.log(data.results[0].gender)
            
//           })
//         }, [])


const [apiList, setApiList] = useState([]);

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => setApiList(data))
},[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <FriendsCount></FriendsCount>

        <MyFriends name = "Md. Mazharul" age = "24"></MyFriends>
        <MyFriends name = "Md. Dipu"></MyFriends>
        <MyFriends name = {friendsObject[0].name}></MyFriends>
        <MyFriends name = {friends[2]}></MyFriends>

        {
          elakaFriends.map(elaka => <ElakaFriends name = {elaka}></ElakaFriends>)
        }

        {
          theirDetail.map(frnd => <TheirDetail name = {frnd.name} age = {frnd.age}></TheirDetail>)
        }

        {
          apiList.map(user => <ApiList email = {user.email}></ApiList>)
        }

        

        
      </header>
    </div>
  );
}



function MyFriends(props) {

  const friendsStyle = {
    border: "2px solid purple",
    borderRadius: "40px",
    margin: "15px", 
    padding: "10px"
  }

  return (
    <div style={friendsStyle}>
      <h1> I am {props.name}</h1>
        <h3>I am {props.age || 23} years old</h3>
    </div>
  )
}


function FriendsCount(){
const [count, setCount] = useState(0);

const handleClick = () => setCount(count + 1);


  const countStyle = {
    marginBottom: "20px"
  }
  return(
    <div style= {countStyle}>
      <h3>My total friends: {count}</h3>
      <button style={{marginBottom: "20px"}} onClick={handleClick}>How Much</button>

      <TotalFriends total = {count}></TotalFriends>
      <TotalFriends total = {count + 3}></TotalFriends>
      <TotalFriends total = {count + 7}></TotalFriends>
      <TotalFriends total = {count}></TotalFriends>

    </div>
  )
}


function TotalFriends (props){
  return <h4>Total friends: {props.total}</h4>
}


function ElakaFriends(props){
  return(
    <div>
      <h4>I am {props.name}</h4>
    </div>
  )
    
}


function TheirDetail(props){
  const elakaStyle = {
    border: "2px solid hotpink",
    borderRadius: "40px",
    margin: "15px", 
    padding: "10px"
  }
  return(
    <div style={elakaStyle}>
      <h4>I am {props.name}</h4>
      <h5>I am {props.age} years old</h5>
    </div>
  )
    
}


function ApiList(props){
  const apiStyle = {
    border: "2px solid hotpink",
    borderRadius: "40px",
    margin: "15px", 
    padding: "10px"
  }
  return(
    <div style={apiStyle}>
      <h4>I am {props.email} years old</h4>
    </div>
  )
    
}
  

export default App;
