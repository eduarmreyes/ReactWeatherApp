import React, { Component } from "react";
import { Connect } from "react-redux";

class WeatherList extends Component {
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Presure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		);
	}
}

// parameter is like const weather = state.weather
function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);