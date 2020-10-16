import React from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";

class VeggieListItem extends React.Component {
	componentDidMount() {}
	saveMeal = () => {
		console.log("you are saving:", this.props.meal.id);
	};
	render() {
		console.log(this.props.store.veggie);
		return (
			<div>
				<ul>
					<li>
						<div>{this.props.meal.mealName}</div>
						<div>{this.props.meal.calories}</div>
						<div>{this.props.meal.youtube}</div>
						<button onClick={this.saveMeal}>Save Meal</button>
					</li>
				</ul>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(withRouter(VeggieListItem));
