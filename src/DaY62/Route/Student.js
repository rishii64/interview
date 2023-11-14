import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Student() {
  const [data, setData] = useState([
    { name: 'a', id: '1', course: 'mern', batch: 'ea25' },
    { name: 'b', id: '2', course: 'mern', batch: 'ea25' },
    { name: 'c', id: '3', course: 'mern', batch: 'ea25' },
    { name: 'd', id: '4',  course: 'mern', batch: 'ea25' },
    { name: 'e', id: '5',  course: 'mern', batch: 'ea25' }
  ])
  return (
    <>
      <h1>Student Page</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Name :</th>
            <th>Course :</th>
            <th>Batch :</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td><Link to={`/Student/${item.name}`}>Edit</Link></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
