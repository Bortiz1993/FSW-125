import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BountiesC from './components/BountiesC'
import BountiesFormHandler from './components/Bounties-Form';


function App() {

  const [bounties, setBounties] = useState([]);
//axios get.
  const getBounty = () => {
    axios.get('/bounties')
    .then(res => setBounties(res.data))
    .catch(err => console.log(err))
  };
//axios post.
  const submitBounty = (newBounty) => {
axios.post('/bounties', newBounty)
.then(res => {
  setBounties(prevBounties => [...prevBounties, res.data])
})
.catch(err => console.log(err))
  };

  //axios delete.
const deleteBounty = (bountyId) => {
  axios.delete(`/bounties/${bountyId}`)
  .then(res => 
    setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId)))
  .catch(err => console.log(err))
}

//axios put.

const editBounty = (updates, bountyId) => {
  axios.put(`/bounties/${bountyId}`, updates)
  .then(res => {
    setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty: res.data ))
  })
  .catch(err => console.log(err))
}

  useEffect(() =>{
    getBounty();
  },  []);

const bountiesList = bounties.map(bounty => <BountiesC {...bounty} 
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
    <BountiesFormHandler 
    btnText='Add Bounty' 
    submit={submitBounty}/>
    {bountiesList}
    
    </div>
  );
}

export default App;
