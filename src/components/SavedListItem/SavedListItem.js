import React from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";

class SavedListItem extends React.Component {
	componentDidMount() {}
	removeMeal = () => {
		console.log(this.props.store.user.id, "is removing:", this.props.saved.id);
		this.props.dispatch({
			type: "REMOVE_MEAL",
			url: `/api/remove/${this.props.store.user.id}`,
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
						<button>Edit</button>
						<button onClick={this.removeMeal}>Remove</button>
					</li>
				</ul>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(withRouter(SavedListItem));
