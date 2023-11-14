import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {add, sub} from '../Slice/Slice'

export default function UICompo(){
    const countData = useSelector((state)=> state.data.val)
    const dispatch = useDispatch()
    const funAdd =()=>{
        dispatch(add())
    }
    const funSub = ()=>{
        dispatch(sub())
    }
    return(
        <>
            <h3>Redux Toolkit !!!!!!!!!</h3>
            <h4>Count value : {countData}</h4>
            <button onClick={funAdd}>Add</button>
            <button onClick={funSub}>Sub</button>
        </>
    )
}