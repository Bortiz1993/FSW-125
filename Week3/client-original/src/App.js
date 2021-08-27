import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BountiesC from './components/BountiesC'
import BountiesFormHandler from './components/Bounties-Form';


function App() {

  //declaring state, [basically placeholders for a variable, a function and a default value
  const [bounties, setBounties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

//axios get.
  const getBounty = () => {
    axios.get('/bounties')
    .then(res => setBounties(res.data))
  
    .catch(err => console.log(err.response.data.errMsg))
  
  };

//another get request for /bounties/lightsaber endpoint, received a parameter: value of the input as a params
//get request/ setState, get request and if statement to check for erros.

//axios post.
  const submitBounty = (newBounty) => {
axios.post('/bounties', newBounty)
.then(res => {
  setBounties(prevBounties => [...prevBounties, res.data])
})
.catch(err => console.log(err.response.data.errMsg))
  };

  //axios delete.
const deleteBounty = (bountyId) => {
  axios.delete(`/bounties/${bountyId}`)
  .then(res => 
    setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId)))
  .catch(err => console.log(err.response.data.errMsg))
}

//axios put. conditional rendering

const editBounty = (updates, bountyId) => {
  axios.put(`/bounties/${bountyId}`, updates)
  .then(res => {
    console.log(res)
    console.log(bountyId)
    setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty: res.data ))
  })
  .catch(err => console.log(err.response.data.errMsg))
}
//useEffect.It tells react to do something after render.
  useEffect(() =>{
    getBounty();
  },  []);

  //used map to iterate through the array and pass it down to the BountiesC component, copy array to new one with the spread operator.
const bountiesList = bounties.map(bounty => <BountiesC {...bounty} 



//pass down props, is the same as passing down data to child components.
deleteBounty={deleteBounty} 
editBounty={editBounty}
FirstName={bounty.FirstName} 
LastName={bounty.LastName} 
LightSaber={bounty.LightSaber}
Living ={bounty.Living} 
BAmount={bounty.BAmount} 
Type={bounty.Type}
 _id={bounty._id} 
/>)


  return (
    <div className="Bounty-container">
    <h2>Star Wars Sith Bounties</h2>
    <BountiesFormHandler 
    btnText='Add Bounty' 
    submit={submitBounty}/>
    {bountiesList}

    <input type="search" placeholder="search" onChange={event => {setSearchTerm(event.target.value)}}/>
  {bounties.filter((val) => {
    if (searchTerm === val.FirstName){
      return val.FirstName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    } else if (val) {

    }
  
  }).map((val, key) => {
    return <div className="user" key={key}>
    <p>First Name: {val.FirstName}<br/> 
    LastName: {val.LastName}<br/>
    LightSaber: {val.LightSaber}<br/>
    Living: {val.Living}<br/>
    BAmount: {val.BAmount}<br/>
    Type: {val.Type}<br/>
    Item: {val.Item[0].money}
    
  
    </p></div>
  })}

    
    </div>
  );
 
}

export default App;
