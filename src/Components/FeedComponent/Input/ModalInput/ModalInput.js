import React, { useState } from 'react'
import './ModalInput.css'
import db from '../../../FormAuth/firebase'
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default function ModalInput({ visible, setVisible, userName, userPic }) {
    const [postText, setPostText] = useState('')
    const [postPic, setPostPic] = useState('')

    let today = new Date(),
        time = today.getHours() + today.getMinutes();


    const handleNewPost = async () => {
        
        const collectionRef = collection(db, "posts");
        const payload = {  "postPic": postPic, "postText": postText, "time": time, "userName": userName, "userPic": userPic }
        console.log(collectionRef)
        await addDoc(collectionRef, payload)
    }
    return (
        <div className={visible ? "input-form-container active" : "input-form-container"}>
            <div className={visible ? 'input-form active' : "input-form"}>
                <div className='input-form-title'>
                    <h3>Create post</h3>
                    <button className='input-form-crossbutton' onClick={() => setVisible(false)} ><strong>X</strong></button>
                </div>
                <div>
                    <img></img>
                    <div>
                        <h4></h4>
                        <button>Public</button>
                    </div>
                </div>
                <div>
                    <input onChange={e => setPostText(e.target.value)} className='input-form-box' type="text" placeholder='What on your mind?'></input>
                    <input onChange={e => setPostPic(e.target.value)} className='input-form-box' type="text" placeholder='URL'></input>
                </div>
                <button onClick={handleNewPost}>Post</button>

            </div>
        </div>
    )
}
