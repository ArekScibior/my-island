
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import CardBox from './components/CardBox';
import Team from './components/Team';
import Contact from './components/Contact';
import TextContainer from './components/TextContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background.jpg'})`,
    backgroundSize: 'auto',
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      	<CssBaseline />
        <Header />
        <CardBox />
        <TextContainer />
		    <Team />
        <Contact />
    </div>
  );
}
