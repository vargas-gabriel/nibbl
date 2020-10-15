import React from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";

class InfoPage extends React.Component {
	componentDidMount() {
		this.props.dispatch({ type: "FETCH_MEALS" });
	}

	saveMeal = () => {
		console.log("meal saved");
	};
	backHome = () => {
		console.log("back home ");
		this.props.history.push("/home");
	};
	render() {
		console.log(this.props.store.meal, this.props.store.meal.mealName);
		return (
			<div>
				<h1 id='welcome'>
					Here are your results, {this.props.store.user.username}
				</h1>

				{this.props.store.meal.map((meal) => (
					<ul>
						<li>
							<div>{meal.mealName}</div>
							<div>{meal.calories}</div>
							<div>{meal.youtube}</div>
							<button onClick={this.saveMeal}>Save Meal</button>
						</li>
					</ul>
				))}
				<button onClick={this.backHome}>Back to Home</button>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(withRouter(InfoPage));
