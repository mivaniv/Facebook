import React, { useState  , useEffect } from 'react'
import Story from "../Story/Story"
import './StoryBlock.css'

export default function StoryBlock() {

    const [arr , setArr] = useState([])
 
useEffect(() => {
    fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(data => setArr(data))
}, [])

  
  return (
    <div className='story-carousel-container'>
      {arr.map((st) => (
        <Story key={st.id} imgUrl={st.avatar_url} nickname={st.login}></Story>
      ))}
    </div>
  )
}
