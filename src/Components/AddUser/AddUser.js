import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {addUser} from "../../redux/actions";
import {useDispatch} from "react-redux";
import axios from "axios";
import uniqid from "uniqid";

const AddUser = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const dispatch = useDispatch();


    function handleSubmit(e) {
        axios.get(`https://yesno.wtf/api`)
            .then(res => {
                setName(e.target.value);
                setAge(e.target.value);
                const avatarSrc = `https://avatars.dicebear.com/api/male/${age}.svg`
                const id = uniqid();
                dispatch(addUser(id, name, age, avatarSrc, res.data.answer));
            })
    }


    return (
        <form className='formAddUser' onSubmit={handleSubmit}>
            <p>Имя</p>
            <input onChange={event => setName(event.target.value)}/>
            <p>Возраст</p>
            <input onChange={event => setAge(event.target.value)}/>
            <NavLink className='link btn ok' onClick={handleSubmit} to="/home"><p>Добавить пользователя</p></NavLink>
            <NavLink className='link btn cancel' to="/home"><p>Отмена</p></NavLink>
        </form>

    );

}


export default AddUser;