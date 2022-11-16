import { useState } from 'react';

export default function MyComponent () {
    const [inputs, setInputs] = useState({});
    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
 
    return (
      <> 
       <input name="field1" value={inputs.field1 || ''} onChange={handleChange} />
       <input name="field2" value={inputs.field2 || ''} onChange={handleChange} />
      </>
    )
 }