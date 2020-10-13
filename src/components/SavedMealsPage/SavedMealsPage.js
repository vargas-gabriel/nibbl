import React, { Component } from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";

class SavedMealsPage extends Component {
	// this component doesn't do much to start, just renders some user info to the DOM
	render() {
		return (
			<div>
				<p> {this.props.store.user.username}'s Meals</p>
			</div>
		);
	}
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(SavedMealsPage);
