import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Logo from '../images/webcam.png';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme)=> ({
    homeWrapper: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    img: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        margin: '40px 0'
    },
    textWrapper: {
        width: '80%',
        textAlign: 'center'
    },
    homeHeader: {
        color: 'lightblue'
    },
    homeText: {
        color: '#fff',
        fontSize: '20px',
    },
    btn : {
        marginTop: '20px',
        border: 'none',
        backgroundColor: 'transparent',
        color: '#fff',
        cursor: 'pointer',
        border: '1px solid white',
        padding: '10px 20px',
        fontSize: 14,
        
    }
}))
const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.homeWrapper}>
            <img src={Logo} alt="" className={classes.img}/>
            <div className={classes.textWrapper}>
                <Typography  gutterBottom variant='h2' className={classes.homeHeader}>VCA</Typography>
                <Typography className={classes.homeText}>Experience a real time video chat</Typography>
                <a href="#introduction">
                    <button className={classes.btn}>Get Started</button>
                </a>
            </div>
        </div>
    )
}

export default Home
