"use client"
import React, {useState, useEffect} from 'react'

const Home = () => {

  const [message, setMessage] = useState("Loading...")
  const [people, setPeople] = useState([])


  useEffect(()=>{
    fetch("http://localhost:3001/api/home").then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setMessage(data.Message)
        setPeople(data.people)
      }
    )
  }, [])


  return (
    <div>
      <div>{message}</div>
      {people.map((person, index) => (
        <div key={index}>
          {person}
        </div>
      ))}
    </div>
  )
}

export default Home
