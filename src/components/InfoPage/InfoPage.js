import React from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";

class InfoPage extends React.Component {
	componentDidMount() {}
	saveMeal = () => {
		console.log("meal saved");
	};
	backHome = () => {
		console.log("back home ");
		this.props.history.push("/home");
	};
	render() {
		return (
			<div>
				<h1 id='welcome'>
					Here are your results, {this.props.store.user.username}
				</h1>
				<div>Breakfast</div>
				<div>Lunch</div>
				<div>Dinner</div>
				<button onClick={this.saveMeal}>Save Meal</button>
				<button onClick={this.backHome}>Back to Home</button>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(InfoPage);
