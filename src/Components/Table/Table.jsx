import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../index.css'
function createData(id, avatar, name, age, status, options) {
    return { id, avatar, name, age, status, options};
}

const rows = [
    createData('1', '-', 'Sergey', 28, 'Активен'),
    createData('2', '-', 'Andrey', 28, 'Активен'),

];

export default function BasicTable() {
    return (
        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="test table">
                <TableHead>
                    <TableRow>
                        <TableCell>№ п/п</TableCell>
                        <TableCell align="right">Аватар</TableCell>
                        <TableCell align="right">Имя</TableCell>
                        <TableCell align="right">Возраст</TableCell>
                        <TableCell align="right">Статус</TableCell>
                        <TableCell align="right">Опции</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
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
    );
}
