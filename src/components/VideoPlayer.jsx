import React, { useContext, useEffect, useState } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SocketContext } from './SocketContext';

const useStyles = makeStyles((theme)=> ({
    video: {
        width: '550px',
        [theme.breakpoints.down('xs')]: {
            maxWidth: 'inherit'
        }
    },
    gridContainer: {
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        },
    },
    paper: {
        padding: '10px',
        border: '2px solid black',
        margin: '10px'
    },
    h5: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem'
        }
    },
    small: {
        padding: '10px',
        border: '2px solid black',
        margin: '10px',
        [theme.breakpoints.down('xs')]: {
            width: '120px',
            padding: '5px',
            margin: '10px',
            border: 'none'
        }
    }
}))

const VideoPlayer = () => {
    const [resizeCam, setResizeCam] = useState(false);
    const { name, callAccepted, callEnded, myVideo, userVideo, stream, call } = useContext(SocketContext);
    const classes = useStyles();

    useEffect(() => {
        callAccepted ? setResizeCam(true) : setResizeCam(false);
    }, [callAccepted])
    return (
        <Grid container className={classes.gridContainer}>
            { stream && (
                <Paper onClick={()=> {setResizeCam(prev => !prev)}} className={resizeCam ? classes.small: classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography className={classes.h5} variant='h5' gutterBottom>{ name || 'Name'}</Typography>
                        <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                    </Grid>
                </Paper>
            )}
            { callAccepted && !callEnded && (
              <Paper onClick={()=> {setResizeCam(prev => !prev)}} className={resizeCam ? classes.paper: classes.small}>
                <Grid item xs={12} md={6}>
                    <Typography variant='h5' className={classes.h5} gutterBottom>{call.name || 'Name'}</Typography>
                    <video playsInline ref={userVideo} autoPlay className={classes.video} />
                </Grid>
              </Paper>  
            )}
        </Grid>
    )
}

export default VideoPlayer
