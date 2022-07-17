import React from 'react'
import './ModalInput.css'

export default function ModalInput({visible ,setVisible}) {
    return (
        <div className={visible ? "input-form-container active" : "input-form-container"}>
            <div className={visible ?'input-form active' :"input-form"}>
                <div className='input-form-title'>
                    <h3>Create post</h3>
                    <button className='input-form-crossbutton' onClick={()=>setVisible(false)} ><strong>X</strong></button>
                </div>
                <div>
                    <img></img>
                    <div>
                        <h4></h4>
                        <button>Public</button>
                    </div>
                </div>
                <div>
                    <input className='input-form-box' type="text" placeholder='What on your mind?'></input>
                </div>
                <button>Post</button>

            </div>
        </div>
    )
}
