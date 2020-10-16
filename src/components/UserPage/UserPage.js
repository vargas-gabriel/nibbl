import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
import KetoInfoPage from "../KetoInfoPage/KetoInfoPage";

class UserPage extends Component {
	state = {
		hour: null,
		greeting: "",
	};
	componentDidMount() {
		this.getGreeting();
	}

	getGreeting = () => {
		const date = new Date();
		const hour = date.getHours();
		this.setState({
			hour,
		});
		if (hour >= 0 && hour <= 11) {
			this.setState({
				greeting: `Good morning`,
			});
		} else if (hour >= 12 && hour <= 17) {
			this.setState({
				greeting: `Good afternoon`,
			});
		} else {
			this.setState({
				greeting: `Good evening`,
			});
		}
	};
	mealGenKeto = () => {
		console.log("clicked Keto");
		// this.props.dispatch({ type: "FETCH_MEALS" });
		this.props.history.push("/ketinfo");
	};
	mealGenPaleo = () => {
		console.log("clicked Paleo");
		this.props.history.push("/paleoinfo");
	};
	mealGenVegan = () => {
		console.log("clicked Vegan");
		this.props.history.push("/veganinfo");
	};
	mealGenVege = () => {
		console.log("clicked Vegetarian");
		this.props.history.push("/veggieinfo");
	};
	render() {
		return (
			<div>
				<h1 id='welcome'>
					{" "}
					{this.state.greeting}, {this.props.store.user.username}
				</h1>

				<p>To begin, select a diet from the list:</p>
				<div onClick={this.mealGenKeto}>Ketogenic</div>
				<div onClick={this.mealGenPaleo}>Paleo</div>
				<div onClick={this.mealGenVegan}>Vegan</div>
				<div onClick={this.mealGenVege}>Vegetarian</div>
			</div>
		);
	}
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(withRouter(UserPage));
