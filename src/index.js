import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PresidentList from './PresidentList';

const App = () => {
	const [date, setDate] = useState(new Date());
	return(
		<div className="ui padded container segment">
			<h1>Which U.S. Presidents Were Around On This Date?</h1>
			<input onChange={(e) => setDate(new Date(e.target.value))} type="date" />
			<PresidentList list="Current" date={date} />
			<PresidentList list="Previous" date={date} />
			<PresidentList list="Future" date={date} />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('#root'));
