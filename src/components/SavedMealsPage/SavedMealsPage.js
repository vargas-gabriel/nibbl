import React, { Component } from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";

class SavedMealsPage extends Component {
	state = {
		user: this.props.store.user.id,
	};
	// this component doesn't do much to start, just renders some user info to the DOM
	componentDidMount() {
		this.props.dispatch({
			type: "FETCH_IND_MEAL",
			url: `/api/ind/${this.props.store.user.id}`,
		});
	}
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
