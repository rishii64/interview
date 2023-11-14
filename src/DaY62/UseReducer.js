import React, {useReducer} from "react";

const initialState = 0

function reducer(state, action){
    switch(action){
        case 'Add':
            return state+=2
        case 'Sub':
            return state-=2
        case 'Mul':
            return state *=2
        case 'Div':
            return state /=2
        default :
            return state
    }
}

export default function UseReducer(){
    const [count, dispatch] = useReducer(reducer, initialState)
    return(
        <>
            <h2>Count : {count}</h2>
            <button onClick={dispatch('Add')}>Add</button>
            <button onClick={dispatch('sub')}>Subt</button>
            <button onClick={dispatch('Mul')}>Mul</button>
            <button onClick={dispatch('Div')}>Div</button>
        </>
    )
}