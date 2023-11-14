import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, div, multi, sub } from '../Slice/CounterSlice'

export default function UI(){
    const counterData = useSelector((state)=> state.store.val)
    const dispatch = useDispatch()
    const handleSum = ()=>{
        dispatch(add())
    }
    const handleSub = ()=>{
        dispatch(sub())
    }
    const handleMul = ()=>{
        dispatch(multi())
    }
    const handleDiv = ()=>{
        dispatch(div())
    }
  return (
    <>
        <h2>Redux Toolkit Example</h2>
        <h3>Value is : {counterData}</h3>
        <button onClick={handleSum}>Add</button>
        <button onClick={handleSub}>Sub</button>
        <button onClick={handleMul}>Multi</button>
        <button onClick={handleDiv}>Div</button>
    </>
  )
}
