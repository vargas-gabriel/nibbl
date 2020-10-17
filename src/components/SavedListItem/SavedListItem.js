import React from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";

class SavedListItem extends React.Component {
	componentDidMount() {}
	removeMeal = () => {
		this.props.dispatch({
			type: "REMOVE_MEAL",
			url: `/api/ind/${this.props.store.user.id}`,
		});
		window.location.reload();
	};
	editMeal = () => {
		console.log("editing this meal number:", this.props.saved.MEAL_ID);
		this.props.dispatch({
			type: "EDIT_MEAL",
			url: `/api/ind/${this.props.saved.MEAL_ID}`,
		});
	};
	render() {
		return (
			<div>
				<ul>
					<li>
						<div>{this.props.saved.mealName}</div>
						<div>{this.props.saved.calories}</div>
						<div>{this.props.saved.youtube}</div>
						<button onClick={this.editMeal}>Edit</button>
						<button onClick={this.removeMeal}>Remove</button>
					</li>
				</ul>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(withRouter(SavedListItem));
