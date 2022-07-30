import React from 'react'
import './Post.css'

export default function Post({ profPic, nickName, recTime, text, postPic }) {
    return (
        <div className='post'>
            <div className='post-container'>
                <div className='post-top-section'>
                    <img className='post-profile-pic' src={profPic}></img>
                    <div>

                        <p className='post-user-nickname'>{nickName}</p>
                        <p className='post-time'>{recTime}</p>
                    </div>

                </div>
                <div className='post-content'>
                    <p className='post-content-text'>{text}</p>
                    <div className='post-content-pic-containter'>
                        <img className='post-content-pic' src={postPic}></img>
                    </div>
                </div>
                <div>
                    <button>Like</button>
                    <button>Share</button>
                </div>
            </div>

        </div >
    )
}
