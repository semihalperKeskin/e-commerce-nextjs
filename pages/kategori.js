import React, { useState } from 'react'
import Fetch from '../components/Fetch'

export default function Katagori() {
  const [category, setCategory] = useState([]);
  Fetch(setCategory);


  return (
    <div>{category.map((item)=> {
      <div>{item.category}</div>
    })}</div>
  )
}
