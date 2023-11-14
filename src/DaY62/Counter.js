import react, { useState } from 'react'

function Counter(){
    const [val, setVal] = useState(0)
    return(
        <>
            <h2>Counter Variable</h2>
            <h3>Count : {val}</h3>
            <button onClick={()=> setVal(val+1)}>Incre</button>
        </>
    )
}
export default Counter