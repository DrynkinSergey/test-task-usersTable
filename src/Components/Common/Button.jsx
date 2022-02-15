import React from 'react';
import Button from '@mui/material/Button';
import '../../index.css'
const Btn = (props) => {
    return <div className='btn'><Button onClick={props.onClick} variant="contained">{props.title}</Button></div>
    }

export default Btn;