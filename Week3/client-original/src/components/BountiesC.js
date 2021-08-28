 import { useState} from 'react'
 import BountiesFormHandler from './Bounties-Form';


function BountiesC ({ editBounty, deleteBounty, FirstName, LastName, LightSaber, Living, Item,  BAmount, Type, _id}) {
//console.log(props);

const [editToggle, setEditToggle] = useState(false)

    return (
        <div className='bounty-component'>
        {!editToggle ?
        <>
            <h1>FirstName:{FirstName}</h1>
            <p> Last Name: {LastName}<br/>
                LightSaber: {LightSaber}<br/>
                Living: {Living}<br/>
                BAmount: { BAmount}<br/>
                Type:{Type}<br/>
                </p>
                <button 
                onClick={ () => deleteBounty(_id)} 
                className='delete-btn'>delete</button>

                <button onClick={() => setEditToggle(prevToggle => !prevToggle)} 
                className='edit-btn'>Edit</button>
            </>
            :
            <>
        <BountiesFormHandler
            FirstName={FirstName}
            LastName={LastName}
            LightSaber={LightSaber}
            Living={Living}
            BAmount={BAmount}
            Type={Type}
            _id={_id}
            btnText='Submit Edit'
            submit ={(inputs, id) => {
                editBounty(inputs, id)
                setEditToggle(prevToggle => !prevToggle)
            }}/>
        
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
           </> 
        }
        </div>
    );



}

export default BountiesC;