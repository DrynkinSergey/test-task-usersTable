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
const sortBy = require('lodash/sortBy');
function createData(id, avatar, name, age, status, options) {
    return { id, avatar, name, age, status, options};
}
export default function BasicTable() {
    const data = [
        {id: '1', avatar: '-', name: 'Sergey', age: 77, status: 'Активен'},
        {id: '2', avatar: '-', name: 'Sergey', age: 7, status: 'Активен'},
        {id: '3', avatar: '-', name: 'Sergey', age: 17, status: 'Активен'},
        {id: '4', avatar: '-', name: 'Sergey', age: 47, status: 'Активен'},
    ];
    const [state, changeState] = useState(data);
    const sortItem = () => {
        const arr =(state).concat().sort((a, b) => a.age > b.age ? 1 : -1)
            .map((item, i) =>  item);
        changeState(arr)
    }
    const unsorted = () => {
        changeState(data)
    }

    return (
        <div>
            <Btn />
        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="test table">
                <TableHead>

                    <TableRow>
                        <TableCell>№ п/п</TableCell>
                        <TableCell align="right">Аватар</TableCell>
                        <TableCell  align="right" onClick={unsorted}>Имя</TableCell>
                        <TableCell align="right" onClick={sortItem}>Возраст</TableCell>
                        <TableCell align="right">Статус</TableCell>
                        <TableCell align="right">Опции</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.map((row) => (
                        <TableRow
                            key={row.id}
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
