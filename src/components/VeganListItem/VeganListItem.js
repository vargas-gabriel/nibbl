import React from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";

class VeganListItem extends React.Component {
	state = {
		user: this.props.store.user.id,
		meal: this.props.meal.id,
	};
	componentDidMount() {}
	saveMeal = () => {
		console.log(this.props.store.user.id, "is saving:", this.props.meal.id);
		this.setState({
			meal: this.props.meal.id,
		});
		this.props.dispatch({
			type: "ADD_IND_MEAL",
			payload: this.state,
		});
	};
	render() {
		console.log(this.props.store.vegan);
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

export default connect(mapStoreToProps)(withRouter(VeganListItem));
