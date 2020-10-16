import React from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";

class SavedListItem extends React.Component {
	componentDidMount() {}

	render() {
		return (
			<div>
				<ul>
					<li>
						<div>{this.props.saved.mealName}</div>
						<div>{this.props.saved.calories}</div>
						<div>{this.props.saved.youtube}</div>
						<button>Edit</button>
					</li>
				</ul>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(withRouter(SavedListItem));
