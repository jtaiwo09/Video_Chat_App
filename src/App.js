import React, { createRef, useRef } from 'react';
import { AppBar, Typography } from '@material-ui/core';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
import {makeStyles} from '@material-ui/core/styles';
import Home from './components/Home';
import Introduction from './components/Introduction';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:'600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
      margin: '15px'
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  h2: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem'
    }
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Home />
      <Introduction/>
      <VideoPlayer />
      <Options>
          <Notifications />
      </Options>
    </div>
  );
}

export default App;
