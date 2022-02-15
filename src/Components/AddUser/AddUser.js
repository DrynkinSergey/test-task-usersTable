import React, {useState} from 'react';
import { NavLink} from "react-router-dom";
import {addUser} from "../../redux/actions";
import {connect} from "react-redux";

const AddUser = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    return(
        <div>
            <form onSubmit={(e)=> {
                e.preventDefault()
                console.log(name);
                console.log(age);
                addUser( {id:2, avatar: 213, name: 'Sergey', age:132 , status: 'Активен'})
            }
            }>
                <input onChange={event => setName(event.target.value)} />
                <input onChange={event => setAge(event.target.value)} />
                <input type='submit' value='GOTOVO'/>
                <NavLink to="/home" >Go</NavLink>

            </form>
        </div>

    );

}
const mapDispatchToProps = (dispatch) => {
    return {
        addUser: () => dispatch()
    }

};

export default connect(mapDispatchToProps)(AddUser);