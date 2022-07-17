import React from 'react';
import Story from "./Story/Story"
import StoryBlock from "./StoryBlock/StoryBlock"
import "./Feed.css"
import PostInput from './Input/PostInput';

export default function Feed() {
    return (
        <div className='feed'>
            <div className='feed-container'>

                <StoryBlock></StoryBlock>
                <PostInput></PostInput>
            </div>
        </div>
    )
}
