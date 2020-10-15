import React, { Component } from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";

class CreateMealPage extends Component {
	state = {
		meal: "",
		calories: "",
		youtube: "",
		type: "",
		time: "",
	};
	handleChange = (event, propertyName) => {
		this.setState({
			...this.state,
			[propertyName]: event.target.value,
		});
		console.log(this.state);
	};

	handleSubmit = () => {
		console.log("submitted", this.state);

		this.setState({
			meal: "",
			calories: "",
			youtube: "",
			type: "",
		});
		alert("meal saved! :)");
	};

	render() {
		return (
			<div>
				<p> Create Your Own Meal</p>
				<form onSubmit={this.handleSubmit}>
					<input
						required
						value={this.state.meal}
						type='text'
						placeholder='Meal Name'
						onChange={(event) => this.handleChange(event, "meal")}></input>
					<input
						required
						value={this.state.calories}
						type='number'
						placeholder='Calories'
						onChange={(event) => this.handleChange(event, "calories")}></input>
					<input
						required
						value={this.state.youtube}
						type='text'
						placeholder='Youtube Link'
						onChange={(event) => this.handleChange(event, "youtube")}></input>
					<select
						required
						value={this.state.type}
						onChange={(event) => this.handleChange(event, "type")}>
						<option disabled value='0'>
							Pick Diet
						</option>
						<option value={1}>Keto</option>
						<option value={2}>Vegan</option>
						<option value={3}>Vegetarian</option>
						<option value={4}>Paleo</option>
					</select>
					<select
						required
						value={this.state.time}
						onChange={(event) => this.handleChange(event, "time")}>
						<option disabled value='0'>
							Pick Type
						</option>
						<option value={1}>Breakfast</option>
						<option value={2}>Lunch</option>
						<option value={3}>Dinner</option>
					</select>
					<button type='submit'>Save Meal</button>
				</form>
			</div>
		);
	}
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(CreateMealPage);
