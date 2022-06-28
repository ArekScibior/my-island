import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  wrap: {
    margin: '40px',
  },
  card: {
    maxWidth: 600,
    backgroundColor: 'rgba(0,0,0,0.5) !important',
  },
  title: {
    fontSize: '1.5rem !important',
    color: '#BABD1B !important',
    fontWeight: 'bold !important',
  },
  cardContent: {
  },
  cardText: {
    color: '#fff !important',
  }
}));

export default function SimpleCard(props) {
  const classes = useStyles();
  const imgUrl = process.env.PUBLIC_URL + props.img;

  return (
    <div className={classes.wrap}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          height="240"
          width="400"
          image={imgUrl}
          alt="green iguana"
        />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.title}>
            {props.title}
          </Typography>
          <Typography className={classes.cardText}>
            {props.desc}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
