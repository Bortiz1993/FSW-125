import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BountiesC from './components/BountiesC'


function App() {

  const [bounties, setBounties] = useState([]);

  useEffect(() =>{
    axios.get('/bounties')
    .then(res => setBounties(res.data))
    .catch(err => console.log(err))
  },  []);

const bountiesList = bounties.map(bounty => <BountiesC {...bounty} key={bounty.FirstName} LastName={bounty.LastName}/>)


  return (
    <div className="Bounty">
    {bountiesList}
    
    </div>
  );
}

export default App;
