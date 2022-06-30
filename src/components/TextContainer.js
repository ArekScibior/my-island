import React from 'react'
import { IconButton } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		marginBottom: '50px',
		minHeight: '60vh',
	},
	card: {
		maxWidth: '55%',
		backgroundColor: 'rgba(0,0,0,0.5) !important',
	},
	title: {
		fontSize: '1.5rem !important',
		color: '#BABD1B !important',
		fontWeight: 'bold !important',
	},
	offerIcon: {
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
	},
	whiteText: {
		color: '#fff',
	}
}));

export default function TextContainer() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div>
				<div className={classes.placeText}>
					Offer
					<IconButton>
						<LocalOfferIcon className={classes.offerIcon}/>
					</IconButton>
				</div>

			</div>
			<Card className={classes.card}>
				<CardContent className={classes.cardContent}>
					<Typography className={classes.whiteText}>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

					The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
					</Typography>
				</CardContent>
			</Card>
		</div>
	)
}
