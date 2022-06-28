import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SimpleCard from './SimpleCard';

const useStyles = makeStyles((theme) => ({
	cardBox: {
		display: 'flex',
		justifyContent: 'center',
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
		minHeight: '80vh',

	}
}));
export default function CardBox() {
	const classes = useStyles();
	return (
		<div id="box">
			<div className={classes.cardBox}>
				<SimpleCard title="Awesowe Place" img="/assets/card1.jpeg" desc="Mallorca (Majorca) is one of Spain's Balearic Islands in the Mediterranean. It's known for beach resorts, sheltered coves, limestone mountains and Roman and Moorish remains. Capital Palma has nightlife, the Moorish Almudaina royal palace and 13th-century Santa María Cathedral. Stone-built villages include Pollença, with its art galleries and music festival, and hillside Fornalutx, surrounded by citrus plantations."/>
				<SimpleCard title="Great Place" img="/assets/card2.jpeg" desc="Fuerteventura, the second largest of Spain’s Canary Islands, sits in the Atlantic Ocean 100km off the north coast of Africa. It’s known primarily as a holiday destination due to its white-sand beaches and year-round warmth cooled by constant winds. The multitude of beaches that wrap around it are interrupted by cliffs and sheltered coves. It's popular for water sports, especially surfing, windsurfing and waterskiing."/>
			</div>
		</div>
	)
}
