import React from 'react'
import { useParams } from 'react-router-dom'

export default function Dynamic() {
    const data = useParams()
  return (
    <>
        <h3>Name : {data.id}</h3>
        <h3>Dynamic Component</h3>
    </>
  )
}
