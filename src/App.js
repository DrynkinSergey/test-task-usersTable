import  React from 'react';
import './index.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Btn from "./Components/Common/Button";
import {addUser} from "./redux/actions";
import {connect} from "react-redux";
import {Link, NavLink} from "react-router-dom";

const App = (props) => {
console.log(props.users)
    const sortItemById = () => {
        const arr = (props.users).concat().sort((a, b) => a.id > b.id ? 1 : -1)
            .map((item) =>  item);
        console.log(arr);
    }
    const sortItemByAge = () => {
        const arr = (props.users).concat().sort((a, b) => a.age > b.age ? 1 : -1)
            .map((item) =>  item);
    }
    const data = JSON.parse(localStorage.getItem('data'));
    localStorage.getItem('data')

    function saveData ()  {
        localStorage.setItem("data", JSON.stringify(props.users));
    }

    function deleteData() {
        localStorage.removeItem('data');
    }



    return (
        <div className='AppWrapper'>

            <Btn  onClick={props.addUser} title='Добавить пользователя'/>
            <Btn onClick={saveData} title='Сохранить в LocalStorage'/>
            <Btn onClick={deleteData} title='Очистить LocalStorage'/>
            <Link to="/addUser">Go</Link>
            <TableContainer component={Paper} className='table'>
                <Table sx={{ minWidth: 650 }} aria-label="test table">
                    <TableHead>
                        <TableRow>
                            <TableCell >№ п/п</TableCell>
                            <TableCell align="right">Аватар  </TableCell>
                            <TableCell align="right" >Имя</TableCell>
                            <TableCell align="right"  >Возраст</TableCell>
                            <TableCell align="right" >Статус</TableCell>
                            <TableCell align="right" >Опции</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.users.map((row) => (
                            <TableRow
                                key={`${row.id}_${row.index}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" width="20px">{row.id}</TableCell>
                                <TableCell align="right"><img width='30px' src={row.avatar} alt=""/></TableCell>
                                <TableCell className='name' align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.age}</TableCell>
                                <TableCell align="right">{row.status === 'yes'? 'Активен' : '-'}</TableCell>
                                <TableCell align="center">-</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}



function mapStateToProps (state)  {
    const { usersReducer } = state;
    return{
        users: usersReducer.users
    }

}

let ageRandom = 30;
const avatarSrc =`https://avatars.dicebear.com/api/male/${ageRandom}.svg`
const mapDispatchToProps = (dispatch) => {
    return {
        addUser: () => dispatch(addUser( {id:2, avatar: avatarSrc, name: 'Sergey', age:132 , status: 'Активен'}))
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(App);