import React from 'react'
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		paddingBottom: '20px',
	},
	locationIcon: {
		color: '#fff',
		fontSize: '4rem',
		marginBottom: '10px',
	},
	placeText: {
		fontSize: '50px',
		textTransform: 'uppercase',
		color: '#fff',
		fontWeight: 'bold',
		marginBottom: '20px',
		textAlign: 'center',
	}
}));

export default function Contact() {
    const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.placeText}>
				Our place
				<IconButton>
					<LocationOnIcon className={classes.locationIcon}/>
				</IconButton>
			</div>
			
			<div>
				<iframe width="100%" height="563" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
			</div>
		</div>
	)
}
