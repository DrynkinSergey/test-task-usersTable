import React, {useState} from 'react';
import './index.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {connect, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {deleteUser, sortAge} from "./redux/actions";

const App = (props) => {
    const [sortedAge, setSorted] = useState(false);
    const [sortedId, setSortedId] = useState(false);
    const sortItemById = () => {
        if (sortedId) {
            const arr = (props.users).concat().sort((a, b) => +a.index > +b.index ? 1 : -1).reverse()
                .map((item) => item);
            setSortedId(!sortedId);
            dispatch(sortAge(arr));
        } else {
            const arr = (props.users).concat().sort((a, b) => +a.index > +b.index ? 1 : -1)
                .map((item) => item);
            setSortedId(!sortedId);
            dispatch(sortAge(arr));
        }

    }
    const sortItemByAge = () => {
        if (sortedAge) {
           const arr = (props.users).concat().sort((a, b) => +a.age > +b.age ? 1 : -1).reverse()
                .map((item) => item);
           setSorted(!sortedAge);
            dispatch(sortAge(arr));
        } else {
            const arr = (props.users).concat().sort((a, b) => +a.age > +b.age ? 1 : -1)
                .map((item) => item);
            setSorted(!sortedAge);
            dispatch(sortAge(arr));
        }


    }

    /* const data = JSON.parse(localStorage.getItem('data'));
     localStorage.getItem('data')

     function saveData() {
         localStorage.setItem("data", JSON.stringify(props.users));
     }

     function deleteData() {
         localStorage.removeItem('data');
     }*/

    const dispatch = useDispatch();

    return (
        <div className='AppWrapper'>
            <Link className='link btn ok' to="/addUser"><p>Добавить пользователя</p></Link>
            {props.users.length > 0 ? <TableContainer component={Paper} className='table'>
                    <Table sx={{minWidth: 650}} aria-label="test table">
                        <TableHead>
                            <TableRow>
                                <TableCell onClick={sortItemById}>№ п/п</TableCell>
                                <TableCell align="right">Аватар </TableCell>
                                <TableCell align="right">Имя</TableCell>
                                <TableCell align="right" onClick={sortItemByAge}>Возраст</TableCell>
                                <TableCell align="right">Статус</TableCell>
                                <TableCell align="right">Опции</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.users.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                        <TableCell component="th" scope="row" width="20px">{row.index}</TableCell>
                                        <TableCell align="right"><img width='30px' src={row.avatar} alt=""/></TableCell>
                                        <TableCell className='name' align="right">{row.name}</TableCell>
                                        <TableCell align="right">{row.age}</TableCell>
                                        <TableCell align="right">{row.status === 'yes' ? 'Активен' : '-'}</TableCell>
                                        <TableCell align="center">
                                            <button onClick={()=>{
                                                dispatch(deleteUser(row.id))
                                                console.log(row.id);
                                            }} className='btnDelete'>Удалить</button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer> :
                <p className='noUsers'>Нет данных о пользователях</p>}

        </div>

    );
}


function mapStateToProps(state) {
    const {usersReducer} = state;
    return {
        users: usersReducer.users,
        index: usersReducer.index
    }

}

export default connect(mapStateToProps, null)(App);