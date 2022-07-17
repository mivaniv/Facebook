import React from 'react'
import Feed from '../FeedComponent/Feed'
import LeftColumn from '../MainLeftColumn/LeftColumn'
import RightColumn from '../MainRightColumn/RightColumn'
import "./Main.css"

export default function Main({userPic}) {
  return (
    <div className='main-block'>
      <LeftColumn userPic={userPic}></LeftColumn>
      <Feed></Feed>
      <RightColumn></RightColumn>
    </div>
  )
}
