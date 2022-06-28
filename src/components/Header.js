
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {IconButton, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Header.css';


const useStyles = makeStyles(theme => ({
	headerWrapper: {
		width: '80%',
		margin: '0 auto',
		display: 'flex',
		justifyContent: 'space-between',
	},
	title: {
		flexGrow: 1,
		color: '#fff',
	},
	purpleText: {
		color: '#C729B4',
	},
	sortIcon: {
		color: '#fff',
		display: 'none',
		[theme.breakpoints.down('md')]: {
			display: 'block',
		},
	},
	menuNavigation: {
		display: 'flex-inline',
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
	},
	centerTextWrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '100vh',
		alignItems: 'center',
		color: '#fff',
		fontSize: '4rem',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	arrowDown: {
		color: '#C729B4',
		fontSize: '4em !important',
	},

}));

export default function Header() {
	const classes = useStyles();
  	return (
		<div id="header">
			<div className={classes.headerWrapper}>
				<h1 className={classes.title}>
					My <span className={classes.purpleText}>Website.</span>
				</h1>
				<div className={classes.menuNavigation + ' menu-navigation'}>
					<ul>
						<li>About us</li>
						<li>Offer</li>
						<li>Price</li>
						<li>Contact</li>
					</ul>
				</div>
				<IconButton>
					<SortIcon className={classes.sortIcon}/>
				</IconButton>
			</div>
			<div className={classes.centerTextWrapper}>
				<span>
				Yesterday is history, <br />
				tomorrow is a mystery, <br />
				but today is a <span className={classes.purpleText}>gift.</span>
				</span>
				<IconButton>
					<ExpandMoreIcon className={classes.arrowDown}/>
				</IconButton>
			</div>
			
		</div>
  )
}
