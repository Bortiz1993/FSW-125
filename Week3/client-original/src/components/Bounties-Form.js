import {useState} from 'react'

function BountiesFormHandler({submit, btnText, FirstName, LastName, LightSaber, Living, BAmount, Type, _id}) {
const initialInputs = {FirstName: FirstName || "", LastName: LastName || "", LightSaber:LightSaber || "", Living:Living || "", BAmount:BAmount || "", Type:Type || "", _id:_id || ""};
const [inputs, setInputs] = useState(initialInputs);

const handleChange = (e) => {
    const {name, value} = e.target;
    setInputs(prevInputs => ({...prevInputs, [name]: value}))

}

const handleSubmit = (e) => {
    e.preventDefault();
    submit(inputs, _id);

setInputs(initialInputs);
}

return (
    <form onSubmit={handleSubmit}>
        <input
        required
        type='text'
        name='FirstName'
        value={inputs.FirstName}
        onChange={handleChange}
        placeholder='FirstName'/>
        <input
        required
        type='text'
        name='LastName'
        value={inputs.LastName}
        onChange={handleChange}
        placeholder='LastName'/>
        <input
        required
        type='text'
        name='LightSaber'
        value={inputs.LightSaber}
        onChange={handleChange}
        placeholder='LightSaber'/>
        <input
        required
        type='boolean'
        name='Living'
        value={inputs.Living}
        onChange={handleChange}
        placeholder={'Living'}/>
    <input
        required
        type='number'
        min='1'
        max='9000'
        name='BAmount'
        value={inputs.BAmount}
        onChange={handleChange}
        placeholder='BAmount'/>
        <input
        required
        type='text'
        name="Type"
        value={inputs.Type}
        onChange={handleChange}
        placeholder='Type'/>

        <button className='addBounty-btn'>{btnText}</button>
    </form>
)
}

export default BountiesFormHandler;