import React, { useEffect, useState } from 'react';
import Story from "./Story/Story"
import StoryBlock from "./StoryBlock/StoryBlock"
import "./Feed.css"
import PostInput from './Input/PostInput';

import Post from './Post/Post'

import { collection, onSnapshot } from 'firebase/firestore';

export default function Feed() {
    const [posts , setPosts] = useState([]);

   

   
    return (
        <div className='feed'>
            <div className='feed-container'>

                <StoryBlock></StoryBlock>
                <PostInput></PostInput>
                <Post 
                   profPic="https://avatars.githubusercontent.com/u/1?v=4"
                   nickName="mojombo"
                   recTime="17:55"
                   text="Hello world"
                   postPic="https://avatars.githubusercontent.com/u/1?v=4"




                       />
            </div>
        </div>
    )
}
