import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  wrap: {
    margin: '40px',
  },
  card: {
    maxWidth: 600,
    backgroundColor: 'rgba(0,0,0,0.5) !important',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
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
  },
  wrapperAvatar: {
    marginTop: '20px',
  }
}));

export default function Member (props) {
  const classes = useStyles();
  const imgUrl = process.env.PUBLIC_URL + props.img;

  return (
    <div className={classes.wrap}>
        <Card className={classes.card}>
            <div className={classes.wrapperAvatar}>
                <Avatar className={classes.large} alt="Remy Sharp" src={imgUrl} />
            </div>
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
