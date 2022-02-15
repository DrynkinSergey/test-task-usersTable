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
import axios from "axios";

import {
    Route,
    Switch,
    Redirect,
    withRouter, Link, NavLink
} from "react-router-dom";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
export default function BasicTable() {
    const data = JSON.parse(localStorage.getItem('data'));
    const avatarSrc =`https://avatars.dicebear.com/api/human/2.svg`
    const [state, changeState] = useState(

        localStorage.getItem('data')? data : [
            {id: 1, avatar: avatarSrc, name: 'Sergey', age: 77, status: 'Активен'},

        ]
    );

    const sortItemByAge = () => {
        const arr =(state).concat().sort((a, b) => a.age > b.age ? 1 : -1)
            .map((item) =>  item);
        changeState(arr);
    }
    const sortItemById = () => {
        const arr = (state).concat().sort((a, b) => a.id > b.id ? 1 : -1)
            .map((item) =>  item);
        changeState(arr);
    }
    const unsorted = () => {
        changeState(state)
    }
    const addUser = async ()=> {
        let status;
       await axios.get(`https://yesno.wtf/api`)
            .then(res => {
                status =res.data.answer;

            })
        const ageRandom = getRandomInt(30);
        const avatarSrc =`https://avatars.dicebear.com/api/male/${ageRandom}.svg`
        console.log(avatarSrc);
        changeState( [...state, {id: state.length+1, avatar: avatarSrc, name: 'Sergey', age:ageRandom , status: status}])
    }

    function saveData ()  {
        localStorage.setItem("data", JSON.stringify(state));
    }

    function deleteData() {
        localStorage.removeItem('data');
    }


    return (
        <div>
            <NavLink to='/addUser' >sdfsd</NavLink>
            <Btn onClick={addUser} title='Добавить пользователя'/>
            <Btn onClick={saveData} title='Сохранить в LocalStorage'/>
            <Btn onClick={deleteData} title='Очистить LocalStorage'/>

        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="test table">
                <TableHead>

                    <TableRow>
                        <TableCell onClick={sortItemById} >№ п/п</TableCell>
                        <TableCell align="right">Аватар  </TableCell>
                        <TableCell align="right" onClick={unsorted}>Имя</TableCell>
                        <TableCell align="right" onClick={sortItemByAge}>Возраст</TableCell>
                        <TableCell align="right" >Статус</TableCell>
                        <TableCell align="right" >Опции</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.map((row) => (
                        <TableRow
                            key={`${row.id}_${row.index}`}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" width="20px">{row.id}</TableCell>
                            <TableCell align="right"><img width='30px' src={row.avatar} alt=""/></TableCell>
                            <TableCell className='name' align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.age}</TableCell>
                            <TableCell align="right">{row.status === 'yes'? 'Активен' : '-'}</TableCell>
                            <TableCell align="center">btn</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>

    );
}
