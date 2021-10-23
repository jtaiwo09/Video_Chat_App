import React from 'react'
import { makeStyles } from '@material-ui/core';
import Chat from '../images/chat2.png';
import { ArrowDownward } from '@material-ui/icons';

const useStyles = makeStyles((theme)=> ({
    container: {
        display: 'flex',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#fff',
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            flexDirection:'column'
        }
    },
    left: {
        flex: 1
    },
    leftImage: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    },
    right: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center'
        }
    },
    rightWrapper: {
        width: '70%',
        height: '60vh',
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        }
    },
    rightHeader: {
        fontSize: 30,
        marginBottom: 10,
    },
    rightText: {
        fontSize: 20,
        lineHeight: '30px',
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
        }
    }, 
    arrowDown: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        position: 'absolute',
        left: '50%',
        bottom: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        cursor: 'pointer',
        animation: `$bounce 1s infinite alternate ${theme.transitions.easing.easeInOut}`,
        [theme.breakpoints.down('xs')]: {
            width: '30px',
            height: '30px'
        }
    },
    "@keyframes bounce": {
        '0%': {
            transform: 'translateY(-10px)',
        },
        '100%': {
            transform: 'translateY(10px)',
        }
    }
}))

const Introduction = () => {
    const classes = useStyles()
    return (
        <div className={classes.container} id='introduction'>
            <div className={classes.left}>
                <img src={Chat} alt="" className={classes.leftImage}/>
            </div>
            <div className={classes.right}>
                <div className={classes.rightWrapper}>
                    <h2 className={classes.rightHeader}>How It Works</h2>
                    <p className={classes.rightText}>
                    You just need to enter your name,
                    Press on "Copy Your ID",
                    Send your ID to whom you want to connect,
                    They need to put your ID in their "ID to Call" Box
                    and
                    Press the CALL button.
                    </p>
                </div>
            </div>
            <div className={classes.arrowDown} onClick={()=> window.location.href='/#option'}>
                <ArrowDownward className={classes.arrow}/>
            </div>
        </div>
    )
}

export default Introduction
