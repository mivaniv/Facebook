import React from 'react'
import Feed from '../FeedComponent/Feed'
import LeftColumn from '../MainLeftColumn/LeftColumn'
import RightColumn from '../MainRightColumn/RightColumn'
import "./Main.css"

export default function Main({userPic,user}) {
  return (
    <div className="main-block">
      <LeftColumn userPic={userPic} title={user?.displayName}></LeftColumn>
      <Feed userName={user?.displayName} userPic={userPic}></Feed>
      <RightColumn></RightColumn>
    </div>
  );
}
