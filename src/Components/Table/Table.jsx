import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../index.css'
import Btn from "../Common/Button";
import {useState} from "react";
function createData(id, avatar, name, age, status, options) {
    return { id, avatar, name, age, status, options};
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
export default function BasicTable() {


    const [state, changeState] = useState(
        [
            {id: 1, avatar: '-', name: 'Sergey', age: 77, status: 'Активен'},
            {id: 2, avatar: '-', name: 'Sergey', age: 7, status: 'Активен'},
            {id: 3, avatar: '-', name: 'Sergey', age: 17, status: 'Активен'},
            {id: 4, avatar: '-', name: 'Sergey', age: 47, status: 'Активен'},
        ]
    );

    const sortItemByAge = () => {
        const arr =(state).concat().sort((a, b) => a.age > b.age ? 1 : -1)
            .map((item, i) =>  item);
        changeState(arr);
    }
    const sortItemById = () => {
        const arr =(state).concat().sort((a, b) => a.id > b.id ? 1 : -1)
            .map((item, i) =>  item);
        changeState(arr);
    }
    const unsorted = () => {
        changeState(state)
    }
    const addedUser = ()=> {
        changeState( [...state, {id: state.length+1, avatar: '-', name: 'Sergey', age: 17, status: 'Активен'}])


    }

    return (
        <div>
            <Btn onClick={addedUser}/>
        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="test table">
                <TableHead>

                    <TableRow>
                        <TableCell  onClick={sortItemById} >№ п/п</TableCell>
                        <TableCell align="right">Аватар</TableCell>
                        <TableCell  align="right" onClick={unsorted}>Имя</TableCell>
                        <TableCell align="right" onClick={sortItemByAge}>Возраст</TableCell>
                        <TableCell align="right">Статус</TableCell>
                        <TableCell align="right" onClick={addedUser}>Опции</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.map((row,index) => (
                        <TableRow
                            key={`${row.id}_${row.index}`}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" width="20px">{row.id}</TableCell>
                            <TableCell align="right">{row.avatar}</TableCell>
                            <TableCell className='name' align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.age}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">btn</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>

    );
}
