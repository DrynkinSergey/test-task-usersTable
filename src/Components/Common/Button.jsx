import React from 'react';
import Button from '@mui/material/Button';
import '../../index.css'
const Btn = (props) => {
    return <div className='btn'><Button onClick={props.onClick} variant="contained">Добавить пользователя</Button></div>
    }

export default Btn;