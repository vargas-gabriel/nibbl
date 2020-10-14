import React, { Component } from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";

class CreateMealPage extends Component {
	state = {
		meal: "",
		calories: "",
		youtube: "",
		recipe: "",
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
			recipe: "",
		});
	};

	render() {
		return (
			<div>
				<p> Create Your Own Meal</p>
				<form onSubmit={this.handleSubmit}>
					<input
						value={this.state.meal}
						type='text'
						placeholder='Meal Name'
						onChange={(event) => this.handleChange(event, "meal")}></input>
					<input
						value={this.state.calories}
						type='text'
						placeholder='Calories'
						onChange={(event) => this.handleChange(event, "calories")}></input>
					<input
						value={this.state.youtube}
						type='text'
						placeholder='Youtube Link'
						onChange={(event) => this.handleChange(event, "youtube")}></input>
					<input
						value={this.state.recipe}
						type='text'
						placeholder='Recipe URL'
						onChange={(event) => this.handleChange(event, "recipe")}></input>
					<button type='submit'>Save Meal</button>
				</form>
			</div>
		);
	}
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(CreateMealPage);
