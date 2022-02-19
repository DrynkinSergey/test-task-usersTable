import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {editUser} from "../../redux/actions";
import {useDispatch} from "react-redux";

const EditUser = (props) => {
    const initialState = '';
    const [name, setName] = useState(initialState);
    const [age, setAge] = useState(initialState);
    const [id, setId] = useState(initialState);
    let user;
    useEffect(() => {
        user = props.location.propsSearch;
        setAge(user.age);
        setName(user.name);
        setId(user.id)
    }, []);


    const dispatch = useDispatch();


    function handleSubmit() {
        dispatch(editUser(id, name, age))
    }

    return (
        <form className='formAddUser'>
            <p>Имя</p>
            <input autoFocus={true} placeholder={name} onChange={event => setName(event.target.value)}/>
            <p>Возраст</p>
            <input placeholder={age} onChange={event => setAge(event.target.value)}/>
            <div className='flex'><NavLink className='link btn ok' onClick={handleSubmit} to="/home"><p>Изменить
                пользователя</p></NavLink>
                <NavLink className='link btn cancel' to="/home"><p>Отмена</p></NavLink></div>
        </form>

    );

}


export default EditUser;