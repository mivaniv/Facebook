import React, {useEffect, useState} from 'react'
import './Contacts.css'
import ModalWindowChat from "./ModalWindowChat/ModalWindowChat";
import ContactBlock from "./ContactBlock/ContactBlock";

export default function Contacts() {
    const [arr , setArr] = useState([])
    const [modalActive,setModalActive] = useState(false)
    useEffect(() => {
        fetch("https://api.github.com/users")
            .then(response => response.json())
            .then(data => setArr(data))
    }, [])


    return (
        <div className="Contacts" onClick={() => setModalActive(true)}>
            {arr.map((st) => (
                <ContactBlock key={st.id} imgUrl={st.avatar_url} nickname={st.login}/>
            ))}
            <ModalWindowChat active={modalActive} setActive={setModalActive}/>
        </div>
    )
}
