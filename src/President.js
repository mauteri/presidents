import React from 'react';

const calculateAge = (bornDate, setDate ) => {
	setDate = (setDate) ? setDate : '';
	return Math.floor((new Date(setDate) - new Date(bornDate).getTime()) / 3.15576e+10);
};

const President = props => {
	const president = props.president;

	return(
		<div className="column">
			<div className="ui card">
				<div className="image">
					<img src={president.photo} />
				</div>
				<div className="content">
					<h3 class="header">{president.name}</h3>
					<div className="meta">
						Age: {calculateAge(president.born, props.date)}
					</div>
				</div>
			</div>
		</div>
	);

};

export default President;
