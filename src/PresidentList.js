import React from 'react';
import President from './President';
import data from './data.json';

const PresidentList = props => {
	const presidents = [];

	for (const [i, president] of data.entries()) {
		let bornDate, diedDate, startDate, endDate;

		switch (props.list) {
			case 'Current' :
				for (const[j, years] of president.years.entries()) {
					startDate = new Date(years.start);
					endDate   = (years.end) ? new Date(years.end) : new Date();

					if (props.date >= startDate && props.date <= endDate) {
						presidents.push( <President president={president} date={props.date} /> );
					}
				}
				break;
			case 'Previous' :
				bornDate = new Date(president.born);
				diedDate = (president.died) ? new Date(president.died) : new Date();

				for (const[j, years] of president.years.entries()) {
					endDate   = (years.end) ? new Date(years.end) : new Date();

					if (props.date >= endDate && props.date >= bornDate && props.date <= diedDate) {
						presidents.push(<President president={president} date={props.date} />);
					}
				}
				break;
			case 'Future' :
				bornDate = new Date(president.born);
				diedDate = (president.died) ? new Date(president.died) : new Date();

				for (const[j, years] of president.years.entries()) {
					startDate = new Date(years.start);

					if (props.date <= startDate && props.date >= bornDate && props.date <= diedDate) {
						presidents.push(<President president={president} date={props.date} />);
					}
				}
				break;
			default :
				presidents.push( <President president={president} date={props.date} /> );
		}
	}

	return(
		<div className="ui raised padded container segment">
			<h2>{props.list}</h2>
			<div className="ui six column grid">
				{presidents}
			</div>

		</div>
	);
};

export default PresidentList;
