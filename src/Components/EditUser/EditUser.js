import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {editUser, update} from "../../redux/actions";
import {useDispatch} from "react-redux";
import axios from "axios";

const EditUser = (props) => {
    const initialState = '';
    const [name, setName] = useState(initialState);
    const [age, setAge] = useState(initialState);
    const [id, setId] = useState(initialState);
    let user;
    useEffect(() => {
             user = props.location.propsSearch;
        console.log('UseEff after',user);

        setAge(user.age);
             setName(user.name);
             setId(user.id)
    }, []);



    const dispatch = useDispatch();



    function handleSubmit(e) {
        console.log(age, name);
        dispatch(editUser(id, name,age))
    }

    return (
        <form className='formAddUser' >
            <p >Имя</p>
            <input  onChange={event => setName(event.target.value)}/>
            <p>Возраст</p>
            <input placeholder='Введите возраст: ' onChange={event => setAge(event.target.value)}/>
           <div className='flex'><NavLink className='link btn ok' onClick={handleSubmit} to="/home"><p>Изменить пользователя</p></NavLink>
            <NavLink className='link btn cancel' to="/home"><p>Отмена</p></NavLink></div>
        </form>

    );

}


export default EditUser;