import react from 'react'
import {useState} from 'react'

function UseState(){
    const [data, setData] = useState(0)
    return(
        <>
            <h1>UseState Hook</h1>
            <h2>Data : {data}</h2>
            <button onClick={()=> setData(data+5)}>Add</button>
        </>
    )
}
export default UseState