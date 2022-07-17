import React from 'react'
import './Story.css'

export default function Story({imgUrl , nickname}) {
  return (
    <div>
      <div className='story-block' style={{ backgroundImage : `url(${imgUrl})`}}>
        <img className='story-profile-avatar' src={imgUrl}></img>
        <h4 className='story-profile-nickname'>{nickname}</h4>
      </div>
    </div>
  )
}
