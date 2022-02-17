import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {addUser} from "../../redux/actions";
import {useDispatch} from "react-redux";
import axios from "axios";
import uniqid from "uniqid";

const AddUser = (props) => {

    const initialState='';
    const [name, setName] = useState(initialState);
    const [age, setAge] = useState(initialState);
    const dispatch = useDispatch();

    const [answer, setAnswer] = useState();
    useEffect(() => {
        const apiUrl = `https://yesno.wtf/api`;
        axios.get(apiUrl).then((resp) => {
            const respAnswer = resp.data.answer;
            setAnswer(respAnswer);
        });
    }, [setAnswer]);




    function handleSubmit(e) {
        const avatarSrc = `https://avatars.dicebear.com/api/male/${age}.svg`
        const id = uniqid();
        dispatch(addUser(id, name, age, avatarSrc,answer));
        console.log(answer)
            }

    return (
        <form className='formAddUser' >
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