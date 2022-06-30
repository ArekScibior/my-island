import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import Member from './Member';
import './Team.css'
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
	circle: {
        width: '500px',
        height: '500px',
        lineHeight: '500px',
        borderRadius: '50%',
        fontSize: '50px',
        color:' #fff',
        textAlign: 'center',
        background: '#000',
	},
    title: {
        fontSize: '50px',
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
        marginTop: '50px',
    },
    cardBox: {
		display: 'flex',
		justifyContent: 'center',
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
		minHeight: '60vh',
	},
    groupIcon: {
        color: '#fff',
		fontSize: '4rem',
		marginBottom: '10px',
    }
}));

export default function Team() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                TEAM
                <IconButton>
                    <GroupIcon className={classes.groupIcon}/>
                </IconButton>
            </div>
            <div className={classes.cardBox}>
                <Member title="Jonh" img="/assets/man1.jpg" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "/>
                <Member title="Britney" img="/assets/woman.jpg" desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."/>
                <Member title="Jake" img="/assets/man2.jpg" desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."/>
                <Member title="Adam" img="/assets/man4.jpg" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
            </div>
        </div>
    )
}
