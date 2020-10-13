import React, { Component } from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";

class MealInfoPage extends Component {
	// this component doesn't do much to start, just renders some user info to the DOM
	render() {
		return (
			<div>
				<p>meal placeholder</p>
				<ul>
					<li>meal name</li>
					<li>youtube link</li>
					<li>calories</li>
				</ul>
			</div>
		);
	}
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(MealInfoPage);
