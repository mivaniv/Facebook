import React, { useEffect, useState } from 'react';
import Story from "./Story/Story"
import StoryBlock from "./StoryBlock/StoryBlock"
import "./Feed.css"
import PostInput from './Input/PostInput';
import db from '../FormAuth/firebase'
import Post from './Post/Post'

 
import { collection, onSnapshot } from 'firebase/firestore';

export default function Feed({userName , userPic}) {
    const [posts , setPosts] = useState([]);
    
    useEffect(() => {
        
        onSnapshot(collection(db , "posts"),(snapshot)=>setPosts(snapshot.docs.map(doc => doc.data())))
    }, [])
    


   
    return (
        <div className='feed'>
            <div className='feed-container'>

                <StoryBlock></StoryBlock>
                <PostInput userPic={userPic} userName={userName} ></PostInput>
                {posts.map((post) => (
                    <Post 
                   profPic={post.userPic}
                   nickName={post.userName}
                   recTime={post.time}
                   text={post.postText}
                   postPic={post.postPic}




                       />
                ))}
                
            </div>
        </div>
    )
}
