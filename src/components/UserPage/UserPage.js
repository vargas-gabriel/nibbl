import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
import KetoInfoPage from "../KetoInfoPage/KetoInfoPage";
import "./UserPage.css";

class UserPage extends Component {
	state = {
		hour: null,
		greeting: "",
	};
	componentDidMount() {
		this.getGreeting();
	}
	// this sets the greeting for the user based on the time of day
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
	//mealGen functions push user to corresponding info page
	mealGenKeto = () => {
		console.log("clicked Keto");

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
			<div className='div'>
				<h1 id='welcome'>
					{" "}
					{this.state.greeting}, {this.props.store.user.username}
				</h1>

				<table className='table'>
					<thead>
						<tr>
							<th>To begin, select a diet from the list:</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td onClick={this.mealGenKeto}>
								<button className='button'>Ketogenic</button>
							</td>
						</tr>
						<tr>
							<td onClick={this.mealGenPaleo}>
								<button className='otherButton'>Paleo</button>
							</td>
						</tr>
						<tr>
							<td onClick={this.mealGenVegan}>
								<button className='button'>Vegan</button>
							</td>
						</tr>
						<tr>
							<td onClick={this.mealGenVege}>
								<button className='otherButton'>Vegetarian</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(withRouter(UserPage));
