import React, { Component } from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import SavedListItem from "../SavedListItem/SavedListItem";

class SavedMealsPage extends Component {
	state = {
		user: this.props.store.user.id,
	};
	// this component doesn't do much to start, just renders some user info to the DOM
	componentDidMount() {
		this.setSaved();
	}
	setSaved = () => {
		this.props.dispatch({
			type: "FETCH_IND_MEAL",

			url: `/api/ind/${this.props.store.user.id}`,
		});
	};

	render() {
		return (
			<div className='div'>
				<p>My Profile</p>

				<p>username:{this.props.store.user.username}</p>
				<button>Change Username</button>
				<p>password:##########</p>
				<button>Change Password</button>
				<p>My Saved Meals:</p>
				{this.props.store.indie.map((saved) => (
					<SavedListItem key={saved.id} saved={saved} />
				))}
			</div>
		);
	}
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(SavedMealsPage);
