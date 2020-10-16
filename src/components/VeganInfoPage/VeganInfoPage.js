import React from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
import VeganListItem from "../VeganListItem/VeganListItem";

class VeganInfoPage extends React.Component {
	componentDidMount() {
		this.props.dispatch({ type: "FETCH_VMEALS" });
	}

	saveMeal = () => {
		console.log("meal saved");
	};
	backHome = () => {
		console.log("back home ");
		this.props.history.push("/home");
	};

	render() {
		console.log(this.props.store.vegan);
		return (
			<div>
				<h1 id='welcome'>
					Here are your results, {this.props.store.user.username}
				</h1>

				{this.props.store.vegan.map((meal) => (
					<VeganListItem key={meal.id} meal={meal} />
				))}
				<button onClick={this.backHome}>Back to Home</button>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(withRouter(VeganInfoPage));
