import React from 'react';
import { NavLink} from "react-router-dom";

const AddUser = () => (
    <div>
        <form onSubmit={(e)=> {
            e.preventDefault()

        }
        }>
            <input type="text" placeholder='Введите имя'/>
            <input type="text" placeholder='Введите возраст'/>
            <NavLink to="/home" >Go</NavLink>

        </form>
    </div>
);

export default AddUser;