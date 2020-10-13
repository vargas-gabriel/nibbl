import React, { Component } from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";

class CreateMealPage extends Component {
	// this component doesn't do much to start, just renders some user info to the DOM
	render() {
		return (
			<div>
				<p> Create Your Own Meal</p>
				<form>
					<input type='text' placeholder='Meal Name'></input>
					<input type='text' placeholder='Calories'></input>
					<input type='text' placeholder='Youtube Link'></input>
					<input type='text' placeholder='Recipe URL'></input>
				</form>
			</div>
		);
	}
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(CreateMealPage);
