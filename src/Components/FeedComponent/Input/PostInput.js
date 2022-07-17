import React, { useState } from 'react'
import Live from '@material-ui/icons/Videocam'
import Photo from '@material-ui/icons/PhotoLibrary'
import Emotion from '@material-ui/icons/InsertEmoticon'
import './PostInput.css'
import Modal from './ModalInput/ModalInput'
import Mark from '../../HomeHeader/images/mark.jpeg'

export default function PostInput() {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <div className='post-input'>
                <div className='input-container'>
                    <img className="input-profile-pic" src={Mark}></img>
                    <button type='sumbit' className='input-post-button' onClick={() => setVisible(true)}>What on your mind ?</button>
                </div>
                <div className='input-media-upload'>
                    <label className='input-media-button'>
                        <Live style={{ color: "red" }} />
                        <span>Live video</span>
                    </label>
                    <label className='input-media-button'>
                        <Photo style={{color :"brown"}}></Photo>
                        <span>Photo/video</span>
                    </label>
                    <label className='input-media-button'>
                        <Emotion style={{color:"orange"}}></Emotion>
                        <span>Feeling/Activity</span>
                    </label>
                </div>
            </div>
            <Modal visible={visible} setVisible={setVisible}></Modal>
        </>
    )
}
