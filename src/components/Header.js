
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {IconButton, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
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
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => { setSidebar(!sidebar) }
	useEffect(() => { 
		function resize() {
			if (window.innerWidth > 1280) { setSidebar(false); }
		}
		window.addEventListener('resize', resize);
	});

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
				{!sidebar && <IconButton onClick={showSidebar}>
					<SortIcon className={classes.sortIcon}/>
				</IconButton> }
				<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
					<ul className='nav-menu-items'>
						<li className='nav-icon-close'>
							<IconButton onClick={showSidebar}>
								<CloseIcon className={'close-icon'}/>
							</IconButton>
						</li>
						<li className='nav-menu-text'>About us</li>
						<li className='nav-menu-text'>Offer</li>
						<li className='nav-menu-text'>Price</li>
						<li className='nav-menu-text'>Contact</li>
					</ul>
				</nav>
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
